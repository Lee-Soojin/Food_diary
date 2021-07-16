import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Post from "../post/post";
import styles from "./board.module.css";
import { trackPromise } from "react-promise-tracker";

const Board = ({ Repository, authService }) => {
  const history = useHistory();
  const historyState = history.location.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [posts, setPosts] = useState({});

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
    <>
      <div className={styles.Board_container}>
        {posts &&
          Object.keys(posts).map((key) => (
            <Post key={key} post={posts[key]} deletePost={DeletePost} />
          ))}
      </div>
    </>
  );
};

export default Board;
