import React, { useState } from "react";
import Post from "../post/post";

const Posts = ({ deletePost, updatePost, posts }) => {
  return (
    <>
      {Object.keys(posts).map((key) => (
        <Post
          key={key}
          updatePost={updatePost}
          deletePost={deletePost}
          post={posts[key]}
        />
      ))}
    </>
  );
};
export default Posts;
