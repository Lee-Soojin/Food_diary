import React, { useEffect, useState, useCallback } from "react";
import styles from "./header.module.css";
import logoImg from "../../image/home_logo.png";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";
import "./header.css";

const Header = ({ authService }) => {
  const history = useHistory();
  const historyState = history.location.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [isLogin, setisLogin] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/login",
    });
  };

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
        setisLogin(true);
      } else {
        console.log("no user");
        setisLogin(false);
      }
    });
  });

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Logo" className={styles.logoImg} />
      </div>
      <ul className={styles.menu}>
        <li className={styles.category} key="about">
          About
        </li>
        <li className={styles.category} key="home">
          Home
        </li>
        <li className={styles.category} key="mypage">
          My Page
        </li>
        <li className={styles.category} key="menu">
          Menu
        </li>
        <li className={styles.category} key="menu2">
          Menu
        </li>
      </ul>
      <button
        className={`BtnLogout ${isLogin ? "visible" : "invisible"}`}
        onClick={onLogout}
      >
        로그아웃
      </button>
      <button
        className={`BtnLogin ${isLogin ? "invisible" : "visible"}`}
        onClick={onLogin}
      >
        로그인
      </button>
    </div>
  );
};

export default Header;
