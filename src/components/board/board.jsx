import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Post from "../post/post";
import styles from "./board.module.css";
import Header from "../header/header";
import noPostImg from "../../image/no_post_img.png";

const Board = ({ Repository, authService }) => {
  const history = useHistory();
  const historyState = history.location.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [posts, setPosts] = useState({});
  const postRef = useRef();

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  });

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = Repository.syncPosts(userId, (posts) => {
      setPosts(posts);
    });

    return () => stopSync();
  }, [userId, Repository]);

  const DeletePost = (post) => {
    setPosts((posts) => {
      const updated = { ...posts };
      delete updated[post.id];
      return updated;
    });
    Repository.removePost(userId, post);
  };

  const handleGotoWrite = (event) => {
    event.preventDefault();
    history.push("/diary");
  };

  return (
    <div className={styles.page_board}>
      <Header authService={authService} className={styles.header} />
      <div className={styles.Board_container}>
        <div className={styles.post_container} ref={postRef}>
          {!posts == {} ? (
            Object.keys(posts).map((key) => (
              <Post key={key} post={posts[key]} deletePost={DeletePost} />
            ))
          ) : (
            <div className={styles.NoPostContainer}>
              <p className={styles.noPost_text}>아직 일기가 없어요</p>
              <img
                src={noPostImg}
                alt="no post img"
                className={styles.noPost_img}
              />
              <button className={styles.BtnGotoWrite} onClick={handleGotoWrite}>
                첫 푸드 다이어리 쓰러가기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;
