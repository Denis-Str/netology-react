import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function CreatePost() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const sendPost = async () => {
    const params = { id: 0, comment:`${value}` }
    const body = JSON.stringify(params);
    await fetch(`${process.env.REACT_APP_URL}/posts`, {
      method: "POST",
      body
    });
    setValue('');
    navigate("/");
  };

  const closePage = () => {
    setValue('');
    navigate("/");
  };
  return (
    <div className="create-post-comp _bg-common">
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