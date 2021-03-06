import { BrowserRouter, Route } from "react-router-dom";
import Diary from "./components/diary/diary";
import "./app.css";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";
import Board from "./components/board/board";
import Search from "./components/search/search";
import MainHome from "./components/home/main_home";

function App({ FileInput, naver, authService, Repository }) {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => <MainHome authService={authService} />}
      ></Route>
      <Route
        path="/diary"
        render={() => (
          <Diary
            FileInput={FileInput}
            naver={naver}
            authService={authService}
            Repository={Repository}
          />
        )}
        exact
      />
      <Route
        path="/login"
        render={() => <Login authService={authService} />}
      ></Route>
      <Route
        path="/signup"
        render={() => <SignUp authService={authService} />}
      ></Route>
      <Route
        path="/board"
        render={() => (
          <Board authService={authService} Repository={Repository} />
        )}
      ></Route>
      <Route path="/search" component={Search} exact={true}></Route>
    </BrowserRouter>
  );
}

export default App;
