import React from "react";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent) //
      .then(console.log);
  };
  return (
    <section>
      <h1 className={styles.title}>Login</h1>
      <ul>
        <li className={styles.login_google}>
          <button className={styles.BtnGoogle} onClick={onLogin}>
            Google
          </button>
        </li>
        {/* <li className={styles.login_twitter}>
          <button className={styles.BtnTwitter} onClick={onLogin}>
            Twitter
          </button>
        </li> */}
        {/* <li><button>Naver</button></li> */}
      </ul>
    </section>
  );
};

export default Login;
