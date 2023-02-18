import {useState, useEffect} from "react";
import HandWatches from "./HandWatches";

export default function Clock({time: {timeZone}}) {
  const [currentTime, setCurrentTime] = useState(new Date());
  let currentTimeInMs = currentTime.getTime();
  let localOffset = currentTime.getTimezoneOffset() * 60000;
  let diffTz = (+timeZone * 3600000) + localOffset;
  let newTime = new Date(currentTimeInMs + diffTz);

  useEffect(() => {
    const tick = () => {
      setCurrentTime(new Date());
    }
    const timerID = setInterval(() => tick(),
      1000
    );
    return () => clearInterval(timerID);
  })

  return (
    <div className="clock-comp">
      <HandWatches time={newTime} />
      <div className="digital">{newTime.toLocaleTimeString()}</div>
    </div>
  )
}
