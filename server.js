const express = require('express'); 
const path = require('path'); 
const favicon = require('serve-favicon'); 
const logger = require('morgan'); 

require('dotenv').config(); 
require('./config/database'); // connect to database here 

const app = express(); 

// mount all middlewares below
app.use(logger('dev')); 
app.use(express.json()); 

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico'))); 
app.use(express.static(path.join(__dirname, 'build'))); 
app.use(require('./config/checkToken')); // middleware to verify token & assign user object of payload to req.user 

// API routes here before catchcall route below (map routes to controller actions)
app.use('/api/users', require('./routes/api/users')); 

// catch all route that matches every GET request (ensure to mount API or other routes before it)
// this will get a fullpage refresh or reload 
app.get('/*', (req, res) => {
  // deliver index.html to the browser with the proper path to the file 
  res.sendFile(path.join(__dirname, 'build', 'index.html')); 
}); 

const port = process.env.PORT || 3001; 
app.listen(port, () => {
  console.log(`Express app running on port ${port}`); 
}); 