import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import ImageUploader from "./service/image_uploader";
import MyCustomUploadAdapterPlugin from "./components/custom_img_upload/custom_img_upload";
import Naver from "./service/naver";
import AuthService from "./service/auth_service";

const imageUploader = new ImageUploader();
const FileInput = (props) => new MyCustomUploadAdapterPlugin(imageUploader);
const authService = new AuthService();

const naver = new Naver();

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} naver={naver} authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
