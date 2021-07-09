import React from "react";
import styles from "./post.module.css";

const Post = ({ date, title, content, pos }) => {
  return (
    <>
      <div className={styles.diary_container}>
        <div className={styles.description}>
          <p className={styles.date}>{date}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.pos}>{pos}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className={styles.container}
          // style={{ width: "10rem" }}
          className={styles.content}
        ></div>
      </div>
    </>
  );
};

export default Post;
