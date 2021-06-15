import React from "react";
import Header from "../header/header";
import styles from "./diary.module.css";

const Diary = (props) => {
  return (
    <div className={styles.Diary}>
      <Header />
      <div className={styles.Editor}>
        <h2 className={styles.greeting}>Write greeting in here</h2>
        <input type="text" placeholder="제목" className={styles.title} />
      </div>
    </div>
  );
};

export default Diary;
