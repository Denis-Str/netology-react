import Clock from "./Clock";

export default function Time({time, deleteTime}) {
  return (
    <li className="time-comp">
      <div className="name">{time.name}</div>
      <span className="material-icons icon" onClick={() => deleteTime(time.name)}>close</span>
      <Clock time={time} />
    </li>
  )
}
