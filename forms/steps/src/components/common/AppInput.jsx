export default function AppInput({input: {label, dataInput, key, max, min, type}, onChange}) {
  return (
    <label>
      <span>{label}</span>
      <input value={dataInput} type={type} min={min} max={max} onChange={event => onChange(key, event.target.value)}/>
    </label>
  )
}
