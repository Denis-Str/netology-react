import ItemView from "./itemView";
import { arrayOf } from 'prop-types';
import ItemViewModel from "../../models/ItemViewModel/ItemViewModel";


export default function Listing({items}) {
  const itemsList = items
    .filter(item => item.state !== "removed")
    .map(item => <ItemView key={item.listing_id} item={item} />)

  return (
    <div className="item-list">{itemsList}</div>
  )
}

Listing.defaultProps = {
  items: arrayOf(ItemViewModel)
}
