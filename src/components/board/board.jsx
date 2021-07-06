import React from "react";
import styles from "./board.module.css";

const Board = ({ date, title, content, pos }) => {
  return (
    <>
      <div className={styles.diary_container}>
        <div>
          <p>{date}</p>
          <p>{title}</p>
          <p>{pos}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className={styles.container}
          style={{ width: "10rem" }}
        ></div>
      </div>
    </>
  );
};

export default Board;
