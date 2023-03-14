import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addService, toggleIsEdit, isEdit } from "../../redux/services";

export default function AddForm() {
  const initState = {name: "", price: ""};
  const edit = useSelector(isEdit);
  const [service, setService] = useState(initState);
  const dispatch = useDispatch();

  const updateService = (key, value) => setService({ ...service, [key]: value });

  const saveChange = () => {
    dispatch(addService(service))
    setService(initState);
  }
  const cancelChange = () => {
    dispatch(toggleIsEdit(false));
    setService(initState);
  }

  return (
    <div className="add-form-comp">
      <input
        placeholder="Name"
        value={service.name}
        onInput={event => updateService('name', event.target.value)}
      />
      <input
        placeholder="Price"
        value={service.price}
        onInput={event => updateService('price', +event.target.value)}
      />
      <button type="button" onClick={() => saveChange()}>Save</button>
      { edit && <button type="button" onClick={() => cancelChange()}>Cancel</button> }
    </div>
  )
}
