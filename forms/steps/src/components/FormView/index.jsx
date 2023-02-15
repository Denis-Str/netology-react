import AppInput from "../common/AppInput";
import {useState} from "react";

const initialResult = {
  date: '__.__.__',
  distance: 0,
}


export default function FormView({onAddResult}) {
  const [result, setResult] = useState(initialResult)

  const inputs = [
    {
      label: 'Дата (ДД.ММ.ГГ)',
      key: 'date',
      dataInput: result.date,
    },
    {
      label: 'Пройдено, км',
      key: 'distance',
      dataInput: result.distance,
    }
  ]

  const onChange = (key, value) => {
    const newData = {[key]: value};
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
        { inputs.map(data => <AppInput key={data.key} data={data} onChange={onChange} />)}
        <div role="button" className="button" onClick={() => sendResult()}>ok</div>
      </div>
    </fieldset>
  )
}
