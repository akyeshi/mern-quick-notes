const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcrypt'); 
const User = require('../../models/user'); 

// exported object 
module.exports = {
  create, 
  login, 
  checkToken, 
}; 


// POST: /api/users 
async function create(req, res) {
  try {
    // add user to the database 
    const user = await User.create(req.body); 
    const token = createJWT(user); // create a jwt token (token's payload has a user property)
    res.json(token); // clientside needs to consider that res.json() send back just a string 

    /* res.json({
      user: {
        name: req.body.name, 
        email: req.body.email 
      }
    }); */

  } catch (err) {
    // client will check for non-2xx status code 
    // 400 = Bad Request 
    res.status(400).json(err); 
  }
}; 


// POST: /api/users/login 
async function login(req, res) {
  try {
    // query for a user based on their email
    const user = await User.findOne({ email: req.body.email }); 
    console.log('here is the user object logging in: -------- \n', user); 
    if (!user) throw new Error(); 
    // verify user password is correct using bcrypt's compare() method
    const match = await bcrypt.compare(req.body.password, user.password); 
    if (!match) throw new Error(); 
    const token = createJWT(user); 
    res.json(token); 
  } catch (err) {
    // respond 400 if user not found in DB or user found but password didn't match 
    res.status(400).json('Bad Credentials'); 
  }
}; 

function checkToken(req, res) {
  // verify middleware is doing its job 
  // console.log('-------- req --------: ', req); 
  console.log('-------- req.user -------- \n', req.user); 
  console.log('-------- req.exp -------- \n', req.exp); 
  res.json(req.exp); 
}; 



/*-- Helper Functions --*/ 

// sign JWT token with the process.env.SECRET in the .env file 
function createJWT(user) {
  return jwt.sign(
    // token's payload has a user property that contains the data from the user's MongoDB document!
    { user }, // payload 
    process.env.SECRET, 
    { expiresIn: '24h' }
  ); 
}