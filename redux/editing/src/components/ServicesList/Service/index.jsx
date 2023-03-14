import { deleteService, setEditingIndex, toggleIsEdit} from "../../../redux/services";
import { useDispatch } from "react-redux";

export default function Service({ service, currentIndex }) {
  const dispatch = useDispatch();
  const saveChange = () => {
    dispatch(toggleIsEdit(true));
    dispatch(setEditingIndex(currentIndex));
  }
  const handleDelete = () => dispatch(deleteService(service.name));

  return (
    <li className="service-comp">
      <h4 className="name">{service.name}</h4>
      <div className="price">{service.price}</div>
      <button type="button" onClick={() => saveChange()}>
        <span className="material-icons">edit</span>
      </button>
      <button type="button" onClick={() => handleDelete()}>
        <span className="material-icons">delete</span>
      </button>
    </li>
  )
}
