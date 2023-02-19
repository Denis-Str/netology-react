import {useState} from "react";
import ListView from "../common/ListView";
import AddNote from "./AddNote";

export default function Notes() {
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    let response = await fetch("http://localhost:7777/notes");
    let notes = await response.json();
    setNotes(notes);
  }

  const addNote = async () => {
    await fetch("http://localhost:7777/notes", {
      method: "POST",
      body: `${content}`
    });
    setContent('');
    await fetchNotes();
  }

  const deleteNote = async id => {
    await fetch(`http://localhost:7777/notes/${id}`, {
      method: "DELETE"
    });
    await fetchNotes();
  }

  return (
    <div className="notes-comp">
      <div className="heading">
        <h3>Notes</h3>
        <div className="circle" onClick={() => fetchNotes()}>
          <span className="material-icons update">system_update_alt</span>
        </div>
      </div>
      <ListView notes={notes} deleteNote={deleteNote} />
      <AddNote content={content} setContent={setContent} addNote={addNote} />
    </div>
  )
}
