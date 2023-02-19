import Note from "../../Notes/Note";

export default function ListView({notes, deleteNote}) {
  if (notes.length > 0) {
    const listNotes = notes.map(note => <Note key={note.id} note={note} deleteNote={deleteNote} />);
    return <ul className="render-list-comp">{listNotes}</ul>
  }
  return <h4>No notes</h4>
}
