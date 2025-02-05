import { NavLink } from "react-router-dom";
import "./header.css";
const links = [
  {
    text: "HOME",
    src: "/",
  },
  {
    text: "LOKBOOK",
    src: "/lokBook",
  },
  {
    text: "FEATURES",
    src: "/features",
  },
  {
    text: "PAGES",
    src: "/pages",
  },
  {
    text: "BLOG",
    src: "/blog",
  },
];
export const Header = ({ open }) => {
  return (
    <header className="header">
      <div className="header__logo">YOUR LOGO</div>
      <nav className="menu">
        <ul className="menu__list">
          {links.map((link, index) => {
            return (
              <li key={index} className="menu__item">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={link.src}
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="header__btns">
        <button className="search-btn">
          <img className="search" src="/icons8-search.svg" alt="search" />
        </button>
        <button className="heart-btn">
          <img className="heart" src="/heart-svgrepo-com.svg" alt="heart" />
        </button>
        <button className="cart-btn">
          <img
            className="cart"
            src="/reshot-icon-shopping-cart-W2FJV6L7U5.svg"
            alt="cart"
          />
        </button>
        <button onClick={open}>Войти</button>
      </div>
    </header>
  );
};
