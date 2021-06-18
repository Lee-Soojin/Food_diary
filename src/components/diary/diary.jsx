import React from "react";
import Header from "../header/header";
import styles from "./diary.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";

import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters.js";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import MyCustomUploadAdapterPlugin from "../custom_img_upload/custom_img_upload";

const installedPlugins = [
  Alignment,
  Bold,
  Italic,
  Essentials,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  HorizontalLine,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageInsert,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Table,
  TableToolbar,
  Underline,
];

const Diary = () => {
  return (
    <div className={styles.Diary}>
      <Header />
      <div className={styles.Editor}>
        <h2 className={styles.greeting}>오늘의 하루를 기록하세요</h2>
        <input type="text" placeholder="제목" className={styles.title} />
        <CKEditor
          editor={ClassicEditor}
          config={{
            plugins: [...installedPlugins, MyCustomUploadAdapterPlugin],
            toolbar: [
              "heading",
              "|",
              "fontFamily",
              "fontSize",
              "fontColor",
              "alignment",
              "|",
              "bold",
              "italic",
              "underline",
              "specialCharacters",
              "horizontalLine",
              "|",
              "insertImage",
              "insertTable",
              "|",
              "undo",
              "redo",
            ],
            fontfamily: {
              options: [
                "나눔고딕",
                "나눔명조",
                "Cafe24SsurroundAir",
                "MaruBuri-Regular",
                "InfinitySans-RegularA1",
                "IBMPlexSansKR-Regular",
                "RixYeoljeongdo_Regular",
              ],
            },
          }}
          data="<p>Hello!</p>"
        />
        <button className={styles.BtnUpload}>글 올리기</button>
      </div>
    </div>
  );
};

export default Diary;
