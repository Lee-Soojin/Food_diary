import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import ImageUploader from "./service/image_uploader";
import MyCustomUploadAdapterPlugin from "./components/custom_img_upload/custom_img_upload";

const imageUploader = new ImageUploader();
const FileInput = (props) => new MyCustomUploadAdapterPlugin(imageUploader);

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
