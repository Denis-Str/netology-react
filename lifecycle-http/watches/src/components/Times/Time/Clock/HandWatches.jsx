import  {useRef } from "react";

export default function HandWatches({time}) {
  const sec = useRef();
  const minHand = useRef();
  const hourHand = useRef();

  const seconds = time.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  const mins = time.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;

  const hours = time.getHours();
  const hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;

  if (sec.current !== undefined) {
    sec.current.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.current.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.current.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand" ref={hourHand}></div>
        <div className="hand min-hand" ref={minHand}></div>
        <div className="hand sec" ref={sec}></div>
      </div>
    </div>
  )
}
