
import { useState, useEffect } from 'react';  // react hooks 


export default function NoteCard({ note, handleEdit, edit, handleDelete }) {
  const [formData, setFormData] = useState({  // newNoteFormData
    text: note.text,
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }




  return (

    <div>
      {edit === note._id ?
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          required
        />
        :
        <p style={{ display: "inline" }}>{note.text}</p>
      }
      
      <button onClick={() => handleDelete(note._id)}>X</button>
      <button onClick={() => handleEdit(note._id, formData)}>{edit === note._id ? "update" : "edit"}</button>

    </div>

  )
}