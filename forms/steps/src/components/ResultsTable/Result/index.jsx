import PropTypes, {string, number} from "prop-types";

export default function Result({result: {date, distance}, onHandleClickResult}) {
  return (
    <li className="result-component">
      <div>{date}</div>
      <div>{distance}</div>
      <div className="controls">
        <span className="material-icons" onClick={() => onHandleClickResult({key: 'edit', result: {date, distance}})}>edit_note</span>
        <span className="material-icons" onClick={() => onHandleClickResult({key: 'delete', result: {date, distance} })}>delete</span>
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
