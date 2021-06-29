import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./signup.module.css";

const SignUp = ({ authService }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [food, setFood] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      authService
        .signup(email, password) //
        .then(console.log);
    }
    history.push({
      pathname: "/login",
    });
  };

  return (
    <>
      <div className={styles.signup}>
        <h1>회원가입</h1>
        <form className={styles.singup_form} onSubmit={handleSubmit}>
          <div className={styles.email}>
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              name="email"
              value={email}
            />
          </div>
          <div className={styles.password}>
            <input
              type="password"
              placeholder="비밀번호를 8자리 이상 입력하세요"
              name="password"
              value={password}
            />
          </div>
          <div className={styles.name}>
            <input
              type="name"
              placeholder="이름을 입력하세요"
              name="name"
              value={username}
            />
          </div>
          <div className={styles.favoriteFood}>
            <input
              type="food"
              placeholder="좋아하는 음식 하나를 입력하세요"
              name="food"
              value={food}
            />
          </div>
        </form>
        <button className={styles.BtnSignUp}>가입하기</button>
      </div>
    </>
  );
};

export default SignUp;
