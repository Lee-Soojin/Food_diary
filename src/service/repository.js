import { firebaseDatabase } from "./firebase";

class Repository {
  syncPosts(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/posts`);
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => ref.off();
  }

  savePost(userId, post) {
    firebaseDatabase.ref(`${userId}/posts/${post.id}`).set(post);
  }

  removePost(userId, post) {
    firebaseDatabase.ref(`${userId}/posts/${post.id}`).remove();
  }
}

export default Repository;
