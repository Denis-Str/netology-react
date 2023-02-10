export default function ShopItem({item}) {
  const {name, price, color, img} = item;

  return (
    <li className='shop-item-component'>
      <div className='picture'>
        <img className='image' src={img} alt={name} />
      </div>
      <h2 className='name'>{name}</h2>
      <div className='color'>{color}</div>
      <div className='inner'>
        <div className='price'>${price}</div>
        <div className='button' role='button'>Add to Card</div>
      </div>
    </li>
  )
}
