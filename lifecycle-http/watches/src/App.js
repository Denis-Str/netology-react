import {useState} from "react";
import FormView from "./components/FormView";
import Times from "./components/Times";

const initialState = {
  name: 'Город',
  timeZone: 0,
}

export default function App() {
  const [time, addTime] = useState(initialState);
  const [times, addTimes] = useState([]);

  const onChange = (name, value) => addTime(prevState => ({...prevState, ...{ [name]:  value}}));
  const onAddTimes = () => {
    const isName = times.find(({name}) => name === time.name);
    if (isName) return;
    addTimes(prevState => [...prevState, time]);
    addTime(initialState);
  }
  const deleteTime = name => addTimes([...times.filter(time => time.name !== name)]);

  return (
    <div className="wrap">
      <div className="container">
        <FormView name={time.name} timeZone={time.timeZone} onChange={onChange} onAddTimes={onAddTimes} />
        <Times times={times} deleteTime={deleteTime} />
      </div>
    </div>);
}

