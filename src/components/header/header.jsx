import React from "react";
import styles from "./header.module.css";
import logoImg from "../../image/home_logo.png";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Logo" className={styles.logoImg} />
      </div>
      <ul>
        <li>About</li>
        <li>Home</li>
        <li>My Page</li>
        <li>Menu</li>
        <li>Menu</li>
      </ul>
    </div>
  );
};

export default Header;
