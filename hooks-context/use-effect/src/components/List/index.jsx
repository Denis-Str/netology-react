import {useState, useEffect} from "react";
import User from "./User";

export default function List({changeUser}) {
  const [list, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_URL}/users.json`);
      const users = await response.json();
      setUsers([...users]);
    } catch (e) {
      console.error('Ошибка получения списка пользователей', e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, [list.length === 0]);

  const usersList = list.map(user => <User key={user.id} changeUser={changeUser} className="user" user={user} />);

  if (loading) return <div>is Loading...</div>
  else return <ul className="users-list">{usersList}</ul>
}
