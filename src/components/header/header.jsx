import React, { useEffect, useState, useCallback } from "react";
import styles from "./header.module.css";
import logoImg from "../../image/home_logo.png";
import { Link, useHistory } from "react-router-dom";
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
        <Link to="/">
          <img src={logoImg} alt="Logo" className={styles.logoImg} />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li className={styles.category} key="write">
          <Link to="/diary">Write Diary</Link>
        </li>
        <li className={styles.category} key="mypage">
          <Link to="/board">My Diary</Link>
        </li>
        <li className={styles.category} key="home">
          <Link to="/">Home</Link>
        </li>
        <li className={styles.category} key="menu">
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
