import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const goToHome = (userId) => {
    history.push({
      pathname: "/",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService
      .login(event.currentTarget.textContent) //
      .then((data) => goToHome(data.user.id));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToHome(user.uid);
    });
  });

  const MemberLogin = (e) => {
    e.preventDefault();
    authService
      .signIn(email, password) //
      .then(console.log);
  };

  const handleChange = (e) => {
    const type = e.target.name;
    if (type === "email") {
      setEmail(e.target.value);
    } else if (type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      MemberLogin();
    }
  };
  return (
    <section>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.email_login}>
        <h3>회원 로그인</h3>
        <form
          className={styles.login_form}
          onSubmit={MemberLogin}
          onKeyPress={handleKeyPress}
        >
          <div className={styles.email}>
            <input
              className={styles.input_email}
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.password}>
            <input
              className={styles.input_password}
              type="password"
              placeholder="비밀번호"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <ul>
        <li className={styles.login_google}>
          <button className={styles.BtnGoogle} onClick={onLogin}>
            Google
          </button>
        </li>
        <li className={styles.login_facebook}>
          <button className={styles.BtnFacebook} onClick={onLogin}>
            Facebook
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
