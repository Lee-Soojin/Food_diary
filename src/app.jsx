import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home";
import Diary from "./components/diary/diary";
import "./app.css";

function App({ FileInput, naver }) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Route
        path="/diary"
        render={() => <Diary FileInput={FileInput} naver={naver} />}
        exact
      />
    </BrowserRouter>
  );
}

export default App;
