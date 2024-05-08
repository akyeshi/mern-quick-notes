const Note = require('../../models/note'); 


module.exports = {
  create, 
  index, 
  deleteNote, 
  updateNote, 
}; 



async function index(req, res) {
  const notes = await Note.find({user: req.user._id}); // only logged in user's specific notes 
  res.json(notes); 
}

async function create(req, res) {
  req.body.user = req.user._id; 
  const note = new Note(req.body); 
  await note.save(); 
  res.json(note); 
}; 

async function deleteNote(req, res) {
  const oneNote = await Note.findOneAndDelete({_id: req.params.id, user: req.user._id}); // we will go back to this
  res.json(oneNote); // deletedOne still needs to be returned to REact to update its state 
}; 


async function updateNote(req, res) {
  const updatedNote = await Note.findOneAndUpdate({
    _id: req.params.id, user: req.user._id
  }, 
  req.body, 
  {new: true});   // bring back updated note-document (vs the old)

  res.json(updatedNote); 
}

