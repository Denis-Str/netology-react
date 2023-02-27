import List from "./components/List";
import Details from "./components/Details";

export default function App() {
  const changeUser = id => console.log(id);
  return (
    <div className="wrap">
      <List changeUser={changeUser} />
      <Details />
    </div>
  );
}
