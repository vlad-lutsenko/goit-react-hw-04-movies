import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.navigation}>
          <NavLink
            exact
            to="/"
            className={styles.navLink}
            activeClassName={styles.active}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/movies"
            className={styles.navLink}
            activeClassName={styles.active}
          >
            <li>Movies</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
