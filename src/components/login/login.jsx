import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./login.module.css";
import imgLogin from "../../image/bacon_login.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

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
    // e.preventDefault();
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
    <section className={styles.Login}>
      {/* <h1 className={styles.title}>Login</h1> */}
      <section className={styles.Login_wrap}>
        <img src={imgLogin} alt="imgLogin" className={styles.login_logo} />
        <section className={styles.Login_container}>
          <div className={styles.email_login}>
            <h3 className={styles.user_login_title}>회원 로그인</h3>
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
          <ul className={styles.social_login}>
            <p className={styles.social_login_title}> 소셜 로그인 </p>
            <li className={styles.login_google} key="google_login">
              <button className={styles.BtnGoogle} onClick={onLogin}>
                <FcGoogle className={styles.logo_google} />
                <p>Google</p>
              </button>
            </li>
            <li className={styles.login_facebook} key="facebook_login">
              <button className={styles.BtnFacebook} onClick={onLogin}>
                <FaFacebook className={styles.logo_facebook} />
                <p>Facebook</p>
              </button>
            </li>
          </ul>
          <div className={styles.signup}>
            <p className={styles.signup_text}>
              아직 회원이 아닌가요?
              <Link to="/signup" className={styles.signup_link}>
                <button className={styles.BtnSignup}>회원가입</button>
              </Link>
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Login;
