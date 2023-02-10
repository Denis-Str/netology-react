import ShopItem from "./ShopItem";

export default function ListView({items}) {
  const shopItems = items.map((item, index) => <ShopItem key={`item-${index}`} item={item} />)
  return (
    <ul>{shopItems}</ul>
  )
}
