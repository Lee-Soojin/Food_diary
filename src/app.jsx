import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home";
import Diary from "./components/diary/diary";
import "./app.css";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup";

function App({ FileInput, naver, authService }) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
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
