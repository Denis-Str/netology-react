import { toggleIsEdit} from "../../../redux/services";
import { useDispatch } from "react-redux";

export default function Service({ service }) {
  const dispatch = useDispatch();
  const saveChange = () => {
    dispatch(toggleIsEdit(true));
  }
  const cancelChange = () => console.log(service.name);

  return (
    <li className="service-comp">
      <h4 className="name">{service.name}</h4>
      <div className="price">{service.price}</div>
      <button type="button" onClick={() => saveChange()}>
        <span className="material-icons">edit</span>
      </button>
      <button type="button" onClick={() => cancelChange()}>
        <span className="material-icons">delete</span>
      </button>
    </li>
  )
}
