import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import ImageUploader from "./service/image_uploader";

const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
