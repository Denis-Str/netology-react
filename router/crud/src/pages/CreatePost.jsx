import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const sendPost = async () => {
    await fetch(`${process.env.REACT_APP_URL}/posts`, {
      method: "POST",
      body: `${value}`
    });
    setValue('');
    navigate("/");
  };
  return (
    <div className="create-post-comp">
      <textarea
        className="textarea"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <div className="deliver" />
      <div className="wrap">
        <div
          role="button"
          className="send-post"
          onClick={() => sendPost()}
        >
          Опубликовать
        </div>
      </div>
    </div>
  )
}