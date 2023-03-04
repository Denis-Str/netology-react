import DateTimePretty from "../DateTimePretty";
import DateTime from "../DateTime";

export default function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty>
        <DateTime date={props.date}/>
      </DateTimePretty>
    </div>
  )
}
