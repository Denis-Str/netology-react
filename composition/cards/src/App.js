import Card from "./common/Card";
const cards = [
  {src: 'https://via.placeholder.com/200'},
  {src: ''},
  {src: 'https://via.placeholder.com/200'},
  {src: ''},
  {src: 'https://via.placeholder.com/200'},
  {src: ''},
]

export default function App() {
  const cardsList = cards.map(({src}, index) => {
    if (src) {
      const viewImg = <img src={src} className="card-img-top" alt="picture 1" />
      return (<Card key={index}>{viewImg}</Card>)
    } else return <Card key={index}/>
  })
  return (
    <div className="cards">{cardsList}</div>
  );
}
