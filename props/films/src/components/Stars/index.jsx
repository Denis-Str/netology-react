import Star from "./Star";

export default function Stars({count}) {
  const showRating= count >= 1 && count <= 5;
  const stars = Array.from(Array(count)).map((_, index) => <Star key={`star-${index + 1}`} />)

  if (showRating) return <ul className="card-body-stars u-clearfix">{stars}</ul>
  else return (<ul className="card-body-stars u-clearfix" />)
}

Stars.defaultProps = {
  count: 0
}
