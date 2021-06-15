import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home";
import Diary from "./components/diary/diary";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/diary" component={Diary} />
    </BrowserRouter>
  );
}

export default App;
