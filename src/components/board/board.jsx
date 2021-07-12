import React, { useEffect, useState } from "react";
import Posts from "../posts/posts";
import styles from "./board.module.css";

const Board = ({ deletePost, updatePost, posts, userId }) => {
  const [board, setBoard] = useState();

  useEffect(() => {
    setBoard(posts);
  });

  console.log(posts);
  return (
    <>
      {posts && (
        <Posts deletePost={deletePost} updatePost={updatePost} posts={posts} />
      )}
    </>
  );
};

export default Board;
