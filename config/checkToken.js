

const jwt = require('jsonwebtoken'); 

/* custom middleware function 
    - check if there’s a token sent in an Authorization header or as query param of the HTTP request
    - verifies the token is valid & not expired 
    - decodes the token to obtain user data from its payload 
    - finally, add user payload to Express request object i.e. req.user 
*/

// custom middleware function mounted to all serverside routes 
module.exports = function(req, res, next) {
  // check for token being sent in a header or as a query param 
  let token = req.get('Authorization') || req.query.token; 
  console.log('-------- token with Bearer --------\n', token); 
  req.user = null; // default to null 
  if (!token) return next(); 
  // remove the 'Bearer ' that was included in the token header 
  token = token.replace('Bearer ', ''); 
  console.log('-------- token without Bearer --------\n', token); 
  // check if token is valid and not expired 
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return next(); // invalid token if err 
    req.user = decoded.user; // 'decoded' is the entire token payload 
    req.exp = new Date(decoded.exp * 1000); 
    return next(); 
  })
}