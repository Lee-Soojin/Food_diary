import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import ImageUploader from "./service/image_uploader";
import MyCustomUploadAdapterPlugin from "./components/custom_img_upload/custom_img_upload";
import Naver from "./service/naver";

const imageUploader = new ImageUploader();
const FileInput = (props) => new MyCustomUploadAdapterPlugin(imageUploader);
// const naver = new Naver(
//   process.env.REACT_APP_NAVER_CLIENT_ID,
//   process.env.REACT_APP_NAVER_CLIENT_SECRET
// );

const naver = new Naver();

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} naver={naver} />
  </React.StrictMode>,
  document.getElementById("root")
);
