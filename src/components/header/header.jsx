import React, { useEffect, useState, useCallback } from "react";
import styles from "./header.module.css";
import logoImg from "../../image/home_logo.png";
import { useHistory } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Header = ({ authService }) => {
  const history = useHistory();
  const [isUser, setisUser] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/login",
    });
  };

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  const user = authService.GetUser();
  if (user) {
    setisUser(true);
  } else {
    setisUser(false);
  }
  // useEffect(() => {
  //   authService.onAuthChange((user) => {
  //     if (user) {
  //       setisUser(true);
  //     } else {
  //       history.push("/");
  //       setisUser(false);
  //     }
  //   });
  // });

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
      {!isUser ? (
        <button className={styles.BtnLogin} onClick={onLogin}>
          로그인
        </button>
      ) : (
        <button className={styles.BtnLogout} onClick={onLogout}>
          로그아웃
        </button>
      )}
    </div>
  );
};

export default Header;
