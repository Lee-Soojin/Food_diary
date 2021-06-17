import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home";
import Diary from "./components/diary/diary";
import "./app.css";

function App({ FileInput }) {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Route
        path="/diary"
        render={() => <Diary FileInput={FileInput} />}
        exact
      />
    </BrowserRouter>
  );
}

export default App;
