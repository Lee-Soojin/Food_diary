import React, { useEffect, useState } from "react";
import styles from "./post.module.css";

const Post = ({ updatePost, deletePost, post, key }) => {
  const onClick = (e) => {
    deletePost();
  };

  const handleRewrite = () => {
    updatePost();
  };

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [pos, setPos] = useState("");
  const [content, setContent] = useState(<div></div>);

  useEffect(() => {
    setDate(post.date);
    setTitle(post.title);
    setPos(post.pos);
    setContent(post.content);
  });

  return (
    <>
      <div className={styles.diary_container}>
        <button className={styles.BtnDelete} onClick={onClick}>
          삭제
        </button>
        <button className={styles.BtnRewrite} onClick={handleRewrite}>
          수정
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
