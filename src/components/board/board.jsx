import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Post from "../post/post";
import styles from "./board.module.css";
import Header from "../header/header";

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

  return (
    <div className={styles.page_board}>
      <Header authService={authService} className={styles.header} />
      <div className={styles.Board_container}>
        <h2 className={styles.title}>Diary</h2>
        <div className={styles.post_container} ref={postRef}>
          {posts &&
            Object.keys(posts).map((key) => (
              <Post key={key} post={posts[key]} deletePost={DeletePost} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
