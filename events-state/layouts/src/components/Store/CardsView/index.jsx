import ShopCard from "./ShopCard";

export default function CardsView({cards}) {
  const shopCards = cards.map((card, index) => <ShopCard key={`card-${index}`} card={card} />)
  return (
    <ul className='cards-view-component'>{shopCards}</ul>
  )
}
