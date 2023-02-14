export default function AppInput({label, dataType, onChange}) {
  return (
    <label>
      <span>{label}</span>
      <input type="text" onChange={event => onChange(dataType, event.target.value)} />
    </label>
  )
}
