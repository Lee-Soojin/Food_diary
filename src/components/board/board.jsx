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
  const [click, setClick] = useState(0);
  const [number, setNumber] = useState(0);
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

  const handleLeft = (e) => {
    e.preventDefault();
    setClick(click + 1);
    postRef.current.scrollTo(-100 * click, 0);
  };

  const handleRight = (e) => {
    e.preventDefault();
    setNumber(number + 1);
    postRef.current.scrollTo(100 * number, 0);
  };

  return (
    <>
      <Header authService={authService} />
      <div className={styles.Board_container}>
        <h2 className={styles.title}>Board</h2>
        <button className={styles.BtnLeft} onClick={handleLeft}>
          ◀
        </button>
        <button className={styles.BtnRight} onClick={handleRight}>
          ▶
        </button>
        <div className={styles.post_container} ref={postRef}>
          {posts &&
            Object.keys(posts).map((key) => (
              <Post key={key} post={posts[key]} deletePost={DeletePost} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Board;
