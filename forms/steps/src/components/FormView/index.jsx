import AppInput from "../common/AppInput";
import {useState} from "react";

const initialResult = {
  date: '',
  distance: 0,
}

export default function FormView({onAddResult}) {
  const [result, setResult] = useState(initialResult)

  const onChange = (type, value) => {
    const newData = {[type]: value};
    setResult(prevState => ({...prevState, ...newData}));
  }
  const sendResult = () => {
    onAddResult(result);
    setResult(initialResult);
  }
  return (
    <fieldset className="form-component">
      <legend>Учёт тренировок</legend>
      <div className="inner">
        <AppInput label={'Дата (ДД.ММ.ГГ)'} dataType={'date'} onChange={onChange}/>
        <AppInput label={'Пройдено, км'} dataType={'distance'} onChange={onChange}/>
        <div role="button" className="button" onClick={() => sendResult()}>ok</div>
      </div>
    </fieldset>
  )
}
