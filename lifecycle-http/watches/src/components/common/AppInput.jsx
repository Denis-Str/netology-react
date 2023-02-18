export default function AppInput({input: {label, dataInput, name, type}, onChange}) {
  return (
    <label>
      <span>{label}</span>
      <input value={dataInput} type={type} onChange={event => onChange(name, event.target.value)}/>
    </label>
  )
}
