import Star from "./Star";

export default function Stars({count}) {
  const showRating= count >= 1 && count <= 5;
  if (showRating) {
    const stars = Array.from(Array(count)).map((_, index) => <Star key={`star-${index + 1}`} />);
    return <ul className="card-body-stars u-clearfix">{stars}</ul>
  }
  return (<ul className="card-body-stars u-clearfix" />)
}

Stars.defaultProps = {
  count: 0
}
