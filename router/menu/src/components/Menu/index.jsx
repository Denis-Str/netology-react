import { NavLink } from "react-router-dom";

export default function Menu() {
  const linkStyle = isActive => (isActive ? "menu__item menu__item-active" : "menu__item");
  return (
    <nav className="menu">
      <NavLink to={"/"} className={({ isActive }) => linkStyle(isActive)}>Главная</NavLink>
      <NavLink to={"drift"} className={({ isActive }) => linkStyle(isActive)}>Дрифт-такси</NavLink>
      <NavLink to={"timeattack"} className={({ isActive }) => linkStyle(isActive)}>Time Attack</NavLink>
      <NavLink to={"forza"} className={({ isActive }) => linkStyle(isActive)}>Forza Karting</NavLink>
    </nav>
  );
}
