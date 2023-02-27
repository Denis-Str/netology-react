import {useState, useEffect} from "react";
import users from "../../data/users.json";
import User from "./User";

export default function List({changeUser}) {
  const [list, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL}/users.json`);
    const users = await response.json();
    setUsers([...users]);
  }
  useEffect(() => {
    fetchUsers();
  }, [list.length === 0]);

  const usersList = list.map(user => <User key={user.id} changeUser={changeUser} className="user" user={user} />);
  return (
    <ul className="users-list">{usersList}</ul>
  )
}
