import { useDispatch } from "react-redux";

export default function ErrorView({request}) {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(request);

  return (
    <div className="error-view-comp">
      <span>Произошла ошибка!</span>
      <button onClick={() => handleClick()}>Повторить запрос</button>
    </div>
  )
}
