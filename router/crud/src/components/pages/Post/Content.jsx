export default function Content({post, setIsEdit, deletePost}) {
  const {comment, created} = post;
  const date = new Date(created);

  return (
    <div className="content-comp">
      <h3>{comment}</h3>
      <h5>{date.toDateString()}</h5>
      <div className="deliver" />
      <div className="wrap">
        <div role="button" className="button" onClick={() => setIsEdit(true)}>Изменить</div>
        <div role="button" className="button" onClick={() => deletePost()}>Удалить</div>
      </div>
    </div>
  )
}