export default function Details({user}) {
  const { name, avatar, details: {city, company, position} } = user;

  return (
    <div>
      <img src={avatar} alt={name}/>
      <h3>{name}</h3>
      <div>City: {city}</div>
      <div>Company: {company}</div>
      <div>Position: {position}</div>
    </div>
  )
}
