import Time from "./Time";

export default function Times({times, deleteTime}) {
  const timesList = times.map((time, index) =>
    <Time
    key={`time-${index}`}
    time={time}
    deleteTime={deleteTime}
  />)
  return(
    <ul className="times-comp">{timesList}</ul>
  )
}
