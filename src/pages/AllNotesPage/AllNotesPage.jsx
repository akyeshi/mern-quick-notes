import { useState, useEffect } from 'react';  // react hooks 
import NewNotePage from "../NewNotePage/NewNotePage";
import * as notesAPI from "../../utilities/notes-api";
import NoteCard from '../../components/NoteCard/NoteCard';




export default function AllNotesPage() {

  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    async function getAllNotes() {
      const allNotes = await notesAPI.getAll();
      setNotes(allNotes);
    }
    getAllNotes();
  }, []); // dependency array (empty: run only once), only run dependent on the items/state in the array 

  async function createNote(note) {
    // this line happens after backend route controller function is hashed out 
    const newNote = await notesAPI.create(note);
    setNotes([...notes, newNote]);
  };

  async function handleDelete(id) {
    const oneNote = await notesAPI.deleteNote(id); // this comes after server side is done 
    const updatedNotes = notes.filter(note => note._id !== oneNote._id);
    setNotes(updatedNotes);
  }

  // if 
  function handleEdit(id, data) {
    edit ? handleUpdate(id, data) : setEdit(id); 
  }

  async function handleUpdate(id, data) {
    // console.log(data); 
    const updatedNote = await notesAPI.updateNote(id, data);
    const allUpdatedNotes = notes.map(note => note._id === updatedNote._id ? updatedNote : note);
    setNotes(allUpdatedNotes);
    setEdit(false); 
  }

  return (
    <>
      <h1>List of All Notes</h1>
      <div>
        {notes.map((note, idx) =>
          <NoteCard key={idx} note={note} handleEdit={handleEdit} edit={edit} handleDelete={handleDelete} />
        )}
      </div>
      <div>
        <NewNotePage createNote={createNote} />
      </div>
    </>
  )
}