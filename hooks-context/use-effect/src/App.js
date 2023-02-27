import {useEffect, useState} from "react";
import List from "./components/List";
import Details from "./components/Details";

export default function App() {
  const [userID, setUserID] = useState(null);
  const [user, setUser] = useState({name: null});
  const fetchUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_URL}/${userID}.json`);
    const user = await response.json();
    setUser(user);
  }
  useEffect(() => {
    if (userID) fetchUser();
  }, [userID]);
  const changeUser = id => setUserID(id);

  return (
    <div className="wrap">
      <List changeUser={changeUser}/>
      {user.name ? <Details user={user}/> : <></>}
    </div>
  );
}
