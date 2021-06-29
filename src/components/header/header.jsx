import React from "react";
import styles from "./header.module.css";
import logoImg from "../../image/home_logo.png";

const Header = ({ onLogout }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Logo" className={styles.logoImg} />
      </div>
      <ul className={styles.menu}>
        <li className={styles.category}>About</li>
        <li className={styles.category}>Home</li>
        <li className={styles.category}>My Page</li>
        <li className={styles.category}>Menu</li>
        <li className={styles.category}>Menu</li>
      </ul>
      <button className={styles.BtnLogout} onClick={onLogout}>
        로그아웃
      </button>
    </div>
  );
};

export default Header;
