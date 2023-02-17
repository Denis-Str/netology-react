import AppInput from "../common/AppInput";

export default function FormView({result, onAddResult, onChange}) {
  const maxDate = new Date().toLocaleDateString('ru-RU');

  const inputs = [
    {
      label: 'Дата (дд.мм.гг)',
      key: 'date',
      dataInput: result.date,
      type: 'date',
      max: maxDate.split(".").reverse().join("-"),
    },
    {
      label: 'Пройдено (км)',
      key: 'distance',
      dataInput: result.distance,
      type: 'number',
      min: 0,
    }
  ]

  return (
    <fieldset className="form-component">
      <legend>Учёт тренировок</legend>
      <div className="inner">
        {inputs.map(input => <AppInput key={input.key} input={input} onChange={onChange}/>)}
        <div role="button" className="button" onClick={onAddResult}>ok</div>
      </div>
    </fieldset>
  )
}
