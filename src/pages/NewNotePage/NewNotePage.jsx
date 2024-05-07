
import { useState } from 'react'; 


export default function NewNotePage({createNote}) {
  const [noteFormData, setNoteFormData] = useState({
    text: ""
  }); 

  function handleSubmit(e) {
    e.preventDefault(); 
    createNote(noteFormData)
  }

  return (
    <>
      <h1>Create a New Note</h1>
      <form onSubmit={handleSubmit}>
        <label>Note</label>
        <textarea 
          type="text"
          name="text"
          value={noteFormData.text}
          onChange={e => setNoteFormData({...noteFormData, [e.target.name]: [e.target.value]})}
          required 
        />
        <button type="submit">Create Note</button>
      </form>
    </>
  )
}