
import { useState } from 'react';


export default function NewNotePage({ createNote }) {
  const [noteFormData, setNoteFormData] = useState({
    text: ""
  });

  function handleChange(e) {
    setNoteFormData({ ...noteFormData, [e.target.name]: e.target.value })
  };

  function handleSubmit(e) {
    e.preventDefault();
    createNote(noteFormData); 
    setNoteFormData({
      text: ""
    })
  };

  return (
    <>
      <h1>Create a New Note</h1>
      <form onSubmit={handleSubmit}>
        <label>Note</label>
        <textarea
          type="text"
          name="text"
          value={noteFormData.text}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Note</button>
      </form>
    </>
  )
}