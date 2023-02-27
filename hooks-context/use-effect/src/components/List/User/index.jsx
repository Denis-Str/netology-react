export default function User({changeUser, user}) {
  return (
    <li key={user.id} onClick={() => changeUser(user.id)} className="user">{user.name}</li>
  )
}
