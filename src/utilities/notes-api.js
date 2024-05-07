



import sendRequest from "./send-requests";

// base path of the Express route for users 
const BASE_URL = '/api/notes'; 


// Refactored code 
export function create(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData); 
}; 