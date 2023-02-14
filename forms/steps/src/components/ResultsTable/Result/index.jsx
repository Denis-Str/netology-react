import PropTypes, {string, number} from "prop-types";

export default function Result({result}) {
  return (
    <li className="result-component">
      result
      <span className="material-icons">delete</span>
      <span className="material-icons">edit_note</span>
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
