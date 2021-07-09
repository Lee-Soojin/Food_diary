import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home";
import Diary from "./components/diary/diary";
import "./app.css";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Post from "./components/post/post";

function App({ FileInput, naver, authService, Repository }) {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => <Home authService={authService} />}
      ></Route>
      <Route
        path="/diary"
        render={() => (
          <Diary
            FileInput={FileInput}
            naver={naver}
            authService={authService}
          />
        )}
        exact
      />
      <Route path="/post" render={() => <Post />}></Route>
      <Route
        path="/login"
        render={() => <Login authService={authService} />}
      ></Route>
      <Route
        path="/signup"
        render={() => <SignUp authService={authService} />}
      ></Route>
    </BrowserRouter>
  );
}

export default App;
