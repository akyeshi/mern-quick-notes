import { useState } from 'react';
import NewNotePage from "../NewNotePage/NewNotePage";
import * as notesAPI from "../../utilities/notes-api";




export default function AllNotesPage() {

  const [notes, setNotes] = useState([]);

  async function createNote(note) {
    const newNote = await notesAPI.create(note)
  }

  return (
    <>
      <h1>List of All Notes</h1>
      <div>
        <NewNotePage createNote={createNote} />
      </div>
    </>
  )
}