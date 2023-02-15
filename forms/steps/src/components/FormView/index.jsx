import AppInput from "../common/AppInput";

export default function FormView({result, onAddResult, onChange}) {
  const inputs = [
    {
      label: 'Дата (дд.мм.гг)',
      key: 'date',
      dataInput: result.date,
    },
    {
      label: 'Пройдено (км)',
      key: 'distance',
      dataInput: result.distance,
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
