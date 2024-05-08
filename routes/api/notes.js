

// router module dedicated to the 'users' data resource 
const express = require('express'); 
const router = express.Router(); 
const notesCtrl = require('../../controllers/api/notes'); 
const ensureLoggedIn = require('../../config/ensureLoggedIn'); 

// all paths start with '/api/notes'


// POST /api/notes 
router.post('/', notesCtrl.create); 

// GET /api/notes
router.get('/', notesCtrl.index); 

// DELETE /api/notes/:id 
router.delete('/:id', notesCtrl.deleteNote); 

// UPDATE /api/notes/:id
router.put('/:id', notesCtrl.updateNote); 

module.exports = router; 