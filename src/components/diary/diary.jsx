import React from "react";
import Header from "../header/header";
import styles from "./diary.module.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";

import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
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
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters.js";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";

const installedPlugins = [
  Alignment,
  Bold,
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
  SpecialCharacters,
  SpecialCharactersEssentials,
  Table,
  TableToolbar,
  Underline,
];

const Diary = (props) => {
  return (
    <div className={styles.Diary}>
      <Header />
      <div className={styles.Editor}>
        <h2 className={styles.greeting}>Write greeting in here</h2>
        <input type="text" placeholder="제목" className={styles.title} />
        <CKEditor
          editor={ClassicEditor}
          config={{
            plugins: [...installedPlugins],
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
              "imageUpload",
              "insertTable",
              "|",
              "undo",
              "redo",
            ],
          }}
          data="<p>Hello from CKEditor 5!</p>"
        />
      </div>
    </div>
  );
};

export default Diary;
