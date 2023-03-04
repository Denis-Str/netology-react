export default function Video(props) {
  return (<div className="item item-video">
    <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
    <p className="views">Просмотров: {props.views}</p>
  </div>)
}
