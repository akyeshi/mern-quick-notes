



import sendRequest from "./send-requests";

// base path of the Express route for users 
const BASE_URL = '/api/notes'; 


// Refactored code 
export function create(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData); 
}; 

export function getAll() {
  return sendRequest(BASE_URL); // by default 'GET' method, payload=null
}; 

export function deleteNote(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE'); 
}

export function updateNote(id, data) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', data); 
}