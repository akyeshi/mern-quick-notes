
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
// make the model responsible for the hashing instead of some controller somewhere
const bcrypt = require('bcrypt'); // bcrypt library 
const SALT_ROUNDS = 6; 

// define user schema and add required fields/validation properties on the user schema/model 
const userSchema = new Schema({
  name: {type: String, required: true}, 
  email: {
    type: String, 
    unique: true,   // create unique index in the DB
    trim: true,     // Mongoose trim whitespaces before and after the string before saving 
    lowercase: true, // Mongoose convert the string to lowercase before saving 
    required: true 
  }, 
  password: {
    type: String, 
    trim: true, 
    minLength: 3, 
    required: true
  }
}, {
  timestamps: true, 
  // add toJSON option used to transform the document when its serialized to JSON 
  // don't include or serialized the password when document is 'res.json()'d even though its hashed 
  toJSON: {
    transform: function(doc, ret) { // doc: document, ret: 
      delete ret.password; 
      return ret; 
    }
  }
}); 

// add a Mongoose pre-save hook that will hash the password anytime its changed 
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); 
  // update the password with the computed hash 
  // SALT_ROUNDS variable determine how much processing time it'll take to perform the hash 
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS); // bcrypt library used to hash password 
  return next(); 
}); 


// compile the user schema into a user model and export it 
module.exports = mongoose.model('User', userSchema); 

