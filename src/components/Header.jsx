/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
//import ReactDOM from "react-dom";
import styles from "../components/Header.module.css";
import Search from "./Search";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <a href="#" className={styles.title}>
            TMDB
          </a>
        </Link>
        <ul className={styles.ulNav}>
          <li className={styles.ulNavLi}>
            <Search />
          </li>
          <li className={styles.ulNavLi}>
            <Link to="/register">
              <a href="#" className={styles.navLink}>
                Register
              </a>
            </Link>
          </li>
          <li className={styles.ulNavLi}>
            <a href="#" className={styles.navLink}>
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
