export default function AddNote({content, setContent, addNote}) {
  return (
    <div className="add-note">
      <label htmlFor="note">New note</label>
      <textarea
        id="note"
        name="note"
        rows="5"
        cols="33"
        value={content}
        onChange={event => setContent(event.target.value)}
      />
      <div className="circle icon" onClick={addNote}>
        <span className="material-icons attach">attach_file</span>
      </div>
    </div>
  )
}
