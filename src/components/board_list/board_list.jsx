import React, { useEffect } from "react";
import Post from "../post/post";
import Posts from "../posts/posts";
import styles from "./boardlist.module.css";

const BoardList = ({ deletePost, updatePost, userId, Repository, posts }) => {
  return (
    <>
      {posts && (
        <Posts deletePost={deletePost} updatePost={updatePost} posts={posts} />
      )}
      <div></div>
    </>
  );
};

export default BoardList;
