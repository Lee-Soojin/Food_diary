import React, { useEffect, useState } from "react";
import styles from "./post.module.css";
import { AiOutlineDelete } from "react-icons/ai";

const Post = ({ updatePost, deletePost, post }) => {
  const onClick = (e) => {
    deletePost(post);
  };

  const handleRewrite = () => {
    updatePost(post);
  };

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [pos, setPos] = useState("");
  const [content, setContent] = useState(<div></div>);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setDate(post.date);
    setTitle(post.title);
    setPos(post.pos);
    setContent(post.content);
    setScore(post.score);
    console.log(post);
  });

  return (
    <>
      <div className={styles.diary_container}>
        <button className={styles.BtnDelete} onClick={onClick}>
          <AiOutlineDelete className={styles.Delete_icon} />
        </button>
        <div className={styles.description}>
          <p className={styles.date}>{date}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.pos}>{pos}</p>
          <p className={styles.score}> ⭐ {score} </p>
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
