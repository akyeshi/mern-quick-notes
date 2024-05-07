// src/utilities/users-service.js module to organize functions used to sign-up, log in, log out, etc.
// Any component can import the functions exported from users-service.js as needed

/*
best practice of putting sign up related app logic in the users-service.js service module 
and network logic in the users-api.js API module
*/

import * as usersAPI from './users-api'; 


// signUp method in users-services.js module when the token has been received from the server 
export async function signUp(userData) {
  // deletegate network request code to users-api.js API module 
  // which will ultimately return a jwt 
  const token = await usersAPI.signUp(userData); 
  localStorage.setItem('token', token); // persist the token in browser local storage 
  // return token; 
  return getUser(); 
}; 


/*
user logged out from handleSubmit:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJqaW0iLCJlbWFpbCI6ImtpbUBnbWFpbC5jb20iLCJfaWQiOiI2NjM2YjU5NDc0NGZmODY2OTlkOGM4NjkiLCJjcmVhdGVkQXQiOiIyMDI0LTA1LTA0VDIyOjI0OjIwLjY5NFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTA1LTA0VDIyOjI0OjIwLjY5NFoiLCJfX3YiOjB9LCJpYXQiOjE3MTQ4NjE0NjAsImV4cCI6MTcxNDk0Nzg2MH0.govjpEfzrN5OuvasKO9WwFn4_6hHcniqd84g42nKfQM

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJqaW0iLCJlbWFpbCI6ImtpbUBnbWFpbC5jb20iLCJfaWQiOiI2NjM2YjU5NDc0NGZmODY2OTlkOGM4NjkiLCJjcmVhdGVkQXQiOiIyMDI0LTA1LTA0VDIyOjI0OjIwLjY5NFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTA1LTA0VDIyOjI0OjIwLjY5NFoiLCJfX3YiOjB9LCJpYXQiOjE3MTQ4NjE0NjAsImV4cCI6MTcxNDk0Nzg2MH0.govjpEfzrN5OuvasKO9WwFn4_6hHcniqd84g42nKfQM"; 
const payload = jwt.split('.')[1]; 
atob(payload); 

'{"user":{"name":"jim","email":"kim@gmail.com","_id":"6636b594744ff86699d8c869","createdAt":"2024-05-04T22:24:20.694Z","updatedAt":"2024-05-04T22:24:20.694Z","__v":0},"iat":1714861460,"exp":1714947860}'

*/

export async function login(credentials) {
  // delegate AJAX request to users-api.js module 
  const token = await usersAPI.login(credentials); 
  localStorage.setItem('token', token); 
  return getUser(); 
}; 


export function getToken() { // no async function needed here 
  // getItem returns null if there is no string 
  const token = localStorage.getItem('token'); 
  if (!token) return null; 

  /* 
    > console.log(atob(token.split('.')[1]));
    > output:'"iat":1715096707,"exp":1715183107, {"user":{"_id":"663a49463cf4c3a63831d26b","name":"akyeshi","email":"akyeshi@gmail.com","createdAt":"2024-05-07T15:31:18.113Z","updatedAt":"2024-05-07T15:31:18.113Z","__v":0}}'
    > console.log(JSON.parse(atob(token.split('.')[1]))); 
    > output: 'iat:1715096707,exp:1715183107, {user:{_id:"663a49463cf4c3a63831d26b",name:"akyeshi",email:"akyeshi@gmail.com",createdAt:"2024-05-07T15:31:18.113Z",updatedAt:"2024-05-07T15:31:18.113Z",__v:0}}
  */
  // obtain payload of the token (payload in javascript object literal)
  // payload object has properties i.e. {user}, exp, iat in ms 
  // user property on payload: {name: "Joe", email: "joe@gmail.com", _id: '234sdsdfsdff428", createdAt: "", updatedAt: ""}
  const payload = JSON.parse(atob(token.split('.')[1])); // atob(token.split('.')[1]) => JSON output
  // convert JWT's exp from second to millisecond unit 
  if (payload.exp * 1000 < Date.now()){  // ms elapsed since unix epoch (1/1/1970)
    // remove expired token from local storage 
    localStorage.removeItem('token'); 
    return null; 
  }
  return token;   // get user from token 
}; 

// get user from token 
export function getUser() {
  const token = getToken(); 
  // if there's a token, return the user in the payload, otherwise return null 
  // token payload user property parsed from JSON into javascript object 
  return token ? JSON.parse(atob(token.split('.')[1])).user : null; 

  /* JSON.parse(atob(token.split('.')[1])).user
  {name: 'Dorjee', email: 'dorjee@gmail.com', _id: '6636cfcfd3ee0ebd4cb33643', createdAt: '2024-05-05T00:16:15.806Z', updatedAt: '2024-05-05T00:16:15.806Z', …}
  */
}; 

export function logOut() {
  localStorage.removeItem('token'); 
}; 

export async function checkToken() {
  // alert('clicked'); 
  // checkToken returns a string, but let's make it a Date object for flexibility
  const dateStr = await usersAPI.checkToken(); 
  const dateString = new Date(dateStr); 

  /* better approach 
    const dateString = usersAPI.checkToken()
      .then(dateStr => new Date(dateStr)); 
  */

  console.log('-------- users-services module: checkToken() -------- \n', dateString); 
  return dateString; 
}