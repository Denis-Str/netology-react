export default function ShopCard({card}) {
  const {name, price, color, img} = card;
  return (
    <li className='shop-card-component'>
      <h2 className='name'>{name}</h2>
      <div className='color'>{color}</div>
      <img className='image' src={img} alt={name} />
      <div className='inner'>
        <div className='price'>${price}</div>
        <div className='button' role='button'>Add to Card</div>
      </div>
    </li>
  )
}
