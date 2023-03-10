import {useState} from "react";

export default function Edit({comment, editPost, closePage}) {
  const [value, setValue] = useState(comment);

  return (
    <div className="edit-comp">
      <div className="heading">
        <span className="material-icons" onClick={() => closePage()}>close</span>
      </div>
      <textarea
          className="textarea"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      <div className="deliver"/>
      <div className="wrap">
        <div role="button" className="button" onClick={() => editPost(value)}>Сохранить</div>
      </div>
    </div>
  )
}