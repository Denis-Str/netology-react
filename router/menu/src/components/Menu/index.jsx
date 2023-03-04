import { Link } from "react-router-dom";
const links = ["/", "/drift", "/timeattack"]
export default function Menu() {
  return (
    <nav className="menu">
      <Link to={"/"} className="menu__item">Главная</Link>
      <Link to={"/drift"} className="menu__item">Дрифт-такси</Link>
      {/*<a className="menu__item" href="/">Главная</a>*/}
      {/*<a className="menu__item" href="/drift">Дрифт-такси</a>*/}
      <a className="menu__item" href="/timeattack">Time Attack</a>
      <a className="menu__item" href="/forza">Forza Karting</a>
    </nav>
  );
}
