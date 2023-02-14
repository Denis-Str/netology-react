import hexToRgb from "../../helpers/hexToRgb";

export default function ConverterColor({converterColor}) {
  const onChange = value => {
    if (value.length === 7) converterColor(hexToRgb(value));
  }
  return (
    <input maxLength="7" onChange={event => onChange(event.target.value)} placeholder="#121212"/>
  )
}
