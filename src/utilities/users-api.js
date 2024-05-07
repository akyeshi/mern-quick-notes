// users-service.js module will definitely need to make AJAX requests to the Express server
// network related code is better abstracted into its own modules
// create an API module that will handle user-related communications with the server:

/*
best practice of putting sign up related app logic in the users-service.js service module 
and network logic in the users-api.js API module
*/

import sendRequest from "./send-requests";

// base path of the Express route for users 
const BASE_URL = '/api/users'; 

// Refactored code 
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData); 
}; 

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials); 
}; 

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`); 
}; 


/*
// fetch takes in a 2nd arg i.e. options object that takes in properties like 
// i.e. headers, data/payload for all non-GET http request methods i.e. POST, PUT
export async function signUp(userData) {
  const res = await fetch(BASE_URL, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(userData) 
    // fetch requires data payload to be stringified and asisgned
    // to the body property on the options object 
    // turns javascript object literal into a JSON-formatted string 
  }); 
  if (res.ok) {
    // fetch method will not raise an error unless there’s a network failure
    return res.json(); // res.json() will resolved to the JWT 
  } else {
    throw new Error('Invalid Sign Up'); 
  }
}; 


export async function login(credentials) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(credentials)
  }); 
  if (res.ok) {
    return res.json(); 
  } else {
    throw new Error('Invalid Log In'); 
  }
}; 
*/