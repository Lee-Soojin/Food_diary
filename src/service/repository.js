import { firebaseDatabase } from "./firebase";

class Repository {
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

  setPost(userId, postId, score) {
    firebaseDatabase
      .ref(`${userId}/board/${postId}/score`)
      .set({ score: score });
  }
}

export default Repository;
