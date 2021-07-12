import React from "react";
import styles from "./post.module.css";

const Post = ({ date, title, content, pos, updatePost, deletePost }) => {
  const onClick = (e) => {
    deletePost();
  };

  return (
    <>
      <div className={styles.diary_container}>
        <button className={styles.BtnDelete} onClick={onClick}>
          삭제
        </button>
        <div className={styles.description}>
          <p className={styles.date}>{date}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.pos}>{pos}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className={styles.container}
          className={styles.content}
        ></div>
      </div>
    </>
  );
};

export default Post;
