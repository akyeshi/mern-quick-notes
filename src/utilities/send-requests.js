/*
  - function uses fetch() to make HTTP request to specified URL passing the 'options' object as the 2nd argument 
  - signUp and login functions in users-api.js aren’t very DRY
  - function crewates an 'options' object used as the second argument to the fetch() function 
  - options object contains http method specified in the 'method' parameter 
  - if 'payload' is provided, function adds header and body properties to the object object 
  - 
*/
import { getToken } from "./users-services";

// abstraction of AJAX or HTTP request made from client to server for signUp and login from users service modules 
export default async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch() method accepts an 'options' object as a 2nd argument used to include data payload, set headers etc 
  const options = { method }; 
  if (payload) {
    options.headers = { 'Content-Type': 'application/json'}; 
    options.body = JSON.stringify(payload); 
  }; 

  // if there's a valid token in local storage, include it with AJAX request 
  // best practice: to send the token in the options object's header key named 'Authorization' 
  const token = getToken(); 
  if (token) {  // if there’s a token sent in an Authorization header of the HTTP request
    options.headers ||= {}; // logical OR asisgnment operator 
    // add token to an Authorization header ()
    // prefacing with 'Bearer ' is recommended in the HTTP specification 
    options.headers.Authorization = `Bearer ${token}`; 
  }
  const res = await fetch(url, options); 
  if (res.ok) return res.json(); 
  throw new Error('Bad Request'); 
}; 