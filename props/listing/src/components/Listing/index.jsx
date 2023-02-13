import ItemView from "./itemView";

export default function Listing({items}) {
  Listing.defaultProps = {
    items: []
  }

  const itemsList = items
    .filter(item => item.state !== "removed")
    .map(item => <ItemView key={item.listing_id} item={item}  />)

  return (
    <div className="item-list">{itemsList}</div>
  )
}
