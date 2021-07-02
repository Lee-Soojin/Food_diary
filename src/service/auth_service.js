import { firebaseAuth, googleProvider, facebookProvider } from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  signUp(email, password) {
    return firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email, password) {
    return firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  GetUser() {
    firebaseAuth.onAuthStateChanged(function (user) {
      if (user) {
        const uid = user.uid;
        return uid;
      } else {
        return;
      }
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Facebook":
        return facebookProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
