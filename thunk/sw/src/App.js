import { useSelector, useDispatch } from "react-redux";
import { list, count, changeCount } from "./redux/evidence";

export default function App() {
  const evidenceList = useSelector(list) || [];
  const evidenceCount = useSelector(count) || 0;
  const dispatch = useDispatch();

  const handleChangeInput = value => dispatch(changeCount(value));

  return (
    <div className="wrap">
      <input
        value={evidenceCount}
        type="number"
        min="1" max="5"
        placeholder="Select"
        onChange={event => handleChangeInput(event.target.value)}
      />
      <ul>
        {evidenceList
          .map((evidence, index) => <li key={index}>{evidence}</li>)
          .slice(0, evidenceCount)}
      </ul>
    </div>);
}

