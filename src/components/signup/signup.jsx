import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./signup.module.css";

const SignUp = ({ authService }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [food, setFood] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      authService
        .signUp(email, password) //
        .then(console.log);
    }
    history.push({
      pathname: "/login",
    });

    console.log(email, password, username, food);
  };

  const handleChange = (event) => {
    const type = event.target.name;
    if (type === "email") {
      setEmail(event.target.value);
    } else if (type === "password") {
      let pw = event.target.value;
      setPassword(pw.length >= 8 ? pw : console.log(pw));
    } else if (type === "username") {
      setUsername(event.target.value);
    } else if (type === "food") {
      setFood(event.target.value);
    }
  };

  return (
    <div className={styles.SignUp}>
      <div className={styles.signup_container}>
        <section className={styles.Image}></section>
        <section className={styles.signup}>
          <h1 className={styles.title}>Sign Up</h1>
          <form className={styles.singup_form} onSubmit={handleSubmit}>
            <div className={styles.email}>
              <p className={styles.text_email}>Email</p>
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                name="email"
                value={email}
                onChange={handleChange}
                className={styles.input_email}
              />
            </div>
            <div className={styles.password}>
              <p className={styles.text_password}>Password</p>
              <input
                type="password"
                placeholder="비밀번호를 8자리 이상 입력하세요"
                name="password"
                value={password}
                onChange={handleChange}
                className={styles.input_password}
              />
            </div>
            <div className={styles.name}>
              <p className={styles.text_name}>Name</p>
              <input
                type="name"
                placeholder="이름을 입력하세요"
                name="username"
                value={username}
                onChange={handleChange}
                className={styles.input_name}
              />
            </div>
            <div className={styles.favoriteFood}>
              <p className={styles.text_food}>Favorite Food</p>
              <input
                type="food"
                placeholder="좋아하는 음식 하나를 입력하세요"
                name="food"
                value={food}
                onChange={handleChange}
                className={styles.input_food}
              />
            </div>
          </form>
          <button
            className={styles.BtnSignUp}
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up !
          </button>
          <p className={styles.login}>
            이미 회원이라면 ▶
            <Link to="/login" className={styles.login_link}>
              로그인
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
