import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
