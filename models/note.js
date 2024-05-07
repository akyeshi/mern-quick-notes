

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const noteSchema = new Schema({
  text: {
    type: String, 
    required: true 
  }, 
  user: {
    type: Schema.Types.ObjectId, 
    ref: "User"
  }
}, {
  timestamps: true, 
}); 



// compile the user schema into a user model and export it 
module.exports = mongoose.model('Note', noteSchema); 