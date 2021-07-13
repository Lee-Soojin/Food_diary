import { firebaseDatabase } from "./firebase";
import React from "react";

class Repository {
  board = {};

  syncPosts(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/board`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => ref.off();
  }

  savePost(userId, post) {
    firebaseDatabase.ref(`${userId}/board/${post.id}`).set(post);
    console.log("userid:", userId);
  }

  removePost(userId, post) {
    firebaseDatabase.ref(`${userId}/board/${post.id}`).remove();
  }

  getPost(userId) {
    const dbRef = firebaseDatabase.ref();
    dbRef
      .child(userId)
      .child("board")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.board = snapshot.val();
          console.log(this.board);
        } else {
          console.log("no data avaliable");
        }
      });
  }
}

export default Repository;
