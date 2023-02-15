import PropTypes, {string, number} from "prop-types";

export default function Result({result: {date, distance}}) {
  return (
    <li className="result-component">
      <div>{date}</div>
      <div>{distance}</div>
      <div className="controls">
        <span className="material-icons">edit_note</span>
        <span className="material-icons">delete</span>
      </div>
    </li>
  )
}

Result.ProtoType = {

}
Result.prototype = {
  item: PropTypes.shape({
    date: string.isRequired,
    distance: number.isRequired,
  })
}
