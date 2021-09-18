import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./login.module.css";
import imgLogin from "../../image/login_title.png";
import buttonImg from "../../image/login_button.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = ({ authService }) => {
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
      .then((data) => goToHome(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToHome(user.uid);
    });
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const MemberLogin = async (event) => {
    event && event.preventDefault();
    authService
      .signIn(email, password) //
      .then(console.log);
  };

  const handleChange = (event) => {
    const type = event.target.name;
    if (type === "email") {
      setEmail(event.target.value);
    } else if (type === "password") {
      setPassword(event.target.value);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      MemberLogin();
    }
  };
  return (
    <section className={styles.login}>
      <h2 className={styles.login_title}>LOGIN</h2>
      <div className={styles.login_wrap}>
        <section className={styles.login_image}></section>
        <section className={styles.login_container}>
          <div className={styles.email_login}>
            <h3 className={styles.user_login_title}>회원 로그인</h3>
            <form
              className={styles.login_form}
              onSubmit={MemberLogin}
              onKeyPress={(event) => handleKeyPress(event)}
            >
              <div className={styles.email}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className={styles.input_email}
                />
              </div>
              <div className={styles.password}>
                <input
                  type="password"
                  placeholder="비밀번호"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className={styles.input_password}
                />
              </div>
              <button className={styles.BtnLogin} type="submit">
                LOGIN
              </button>
            </form>
          </div>
          <ul className={styles.social_login}>
            <p className={styles.social_login_title}> 소셜 로그인 </p>
            <div className={styles.social_BtnContainer}>
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
            </div>
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
      </div>
    </section>
  );
};

export default Login;
