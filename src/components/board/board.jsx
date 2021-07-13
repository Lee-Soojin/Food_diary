import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
    const post = userId && Repository.getPost(userId);
    setPosts(Repository.board);
    console.log(posts);
  });

  return (
    <>
      <h1> hello </h1>
    </>
  );
};

export default Board;
