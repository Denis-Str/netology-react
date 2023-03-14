import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { services, addService, toggleIsEdit, isEdit, setEditingIndex, editingIndex } from "../../redux/services";

export default function AddForm() {
  const initState = {name: "", price: ""};
  const edit = useSelector(isEdit);
  const servicesList = useSelector(services);
  const currentIndex = useSelector(editingIndex);
  const [service, setService] = useState(initState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (edit) setService(servicesList[currentIndex]);
  }, [edit])

  const updateService = (key, value) => setService({ ...service, [key]: value });

  const saveChange = () => {
    dispatch(addService(service));
    dispatch(toggleIsEdit(false));
    setService(initState);
  }
  const cancelChange = () => {
    dispatch(toggleIsEdit(false));
    dispatch(setEditingIndex(null));
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
