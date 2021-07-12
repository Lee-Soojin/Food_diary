import React, { useState } from "react";
import Post from "../post/post";
import styles from "./posts.module.css";

const Posts = ({ deletePost, updatePost, posts }) => {
  return (
    <>
      <div className={styles.Posts_container}>
        {posts &&
          Object.keys(posts).map((key) => (
            <Post
              key={key}
              updatePost={updatePost}
              deletePost={deletePost}
              post={posts[key]}
            />
          ))}
      </div>
    </>
  );
};
export default Posts;
