import React, { useEffect, useState, useCallback, memo } from "react";
import styles from "./header.module.css";
import logoImg from "../../image/home_logo.png";
import { Link, useHistory } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import "./header.css";

const Header = memo(({ authService }) => {
  const history = useHistory();
  const historyState = history.location.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [isLogin, setisLogin] = useState(false);
  const [open, setOpen] = useState(false);

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

  const handleMenuClick = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logoImg} alt="Logo" className={styles.logoImg} />
        </Link>
      </div>
      <ul className={`menu ${open ? "open" : "closed"}`}>
        <li className={styles.category} key="write">
          <Link to="/diary">Write Diary</Link>
        </li>
        <li className={styles.category} key="mypage">
          <Link to="/board">My Diary</Link>
        </li>
        <li className={styles.category} key="home">
          <Link to="/">Home</Link>
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
      <button className={styles.BtnMenuBar} onClick={handleMenuClick}>
        <BiMenu />
      </button>
    </div>
  );
});

export default Header;
