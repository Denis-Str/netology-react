import ConverterColor from "./components/ConverterColor";
import {useState} from "react";

export default function App() {
  const [color, setColor] = useState('#ffffff');
  const [colorLegend, setColorLegend] = useState('#ffffff');

  const converterColor = color => {
    console.log(color)
    if (color === null) {
      setColor('#DD3227');
      setColorLegend('#691B16')
    } else {
      const {r, g, b} = color;
      setColor(`rgb(${r}, ${g}, ${b})`);
      setColorLegend(`rgb(${r + 20}, ${g + 20}, ${b + 20})`)
    }
  }

  const legend = color === '#DD3227' ? 'Ошибка!' : color;

  return (
    <div className="wrap" style={{'backgroundColor': color}}>
      <div className="container">
        <ConverterColor converterColor={converterColor}/>
        <div className="legend" style={{'backgroundColor': colorLegend}}>{legend}</div>
      </div>
    </div>
  );
}
