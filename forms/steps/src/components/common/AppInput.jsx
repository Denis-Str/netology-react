export default function AppInput({data: {label, dataInput, key}, onChange}) {
  return (
    <label>
      <span>{label}</span>
      <input value={dataInput} onChange={event => onChange(key, event.target.value)}/>
    </label>
  )
}
