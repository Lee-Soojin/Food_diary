import React, { useCallback, useEffect, useRef, useState } from "react";
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
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
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
import Search from "../search/search";
import StarScore from "../star_score/star_score";
import { useHistory } from "react-router-dom";
import Board from "../board/board";

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
  Highlight,
];

const Diary = ({ naver, authService, Repository }) => {
  const [editor, setEditor] = useState(undefined);
  const [posts, setPosts] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(<div> </div>);
  const [pos, setPos] = useState("");
  const [date, setDate] = useState("");

  const inputRef = useRef();

  const history = useHistory();
  const historyState = history.location.state;
  const [userId, setUserId] = useState(historyState && historyState.id);

  const handleTitle = (e) => {
    const title = inputRef.current.value;
    setTitle(title);
  };

  const onLogout = useCallback(() => {
    authService.logout();
    history.push("/");
  }, [authService]);

  const handleChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  });

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = Repository.syncPosts(userId, (posts) => {
      setPosts(posts);
    });

    return () => stopSync();
  }, [userId, Repository]);

  const UpdatePost = (post) => {
    setPosts((posts) => {
      const updated = { ...posts };
      updated[post.id] = post;
      return updated;
    });
    Repository.savePost(userId, post);
    console.log(post);
  };

  const DeletePost = (post) => {
    setPosts((posts) => {
      const updated = { ...posts };
      delete updated[post.id];
      return updated;
    });
    Repository.removePost(userId, post);
  };

  const handleDate = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let todayDate = `${year} 년 ${month}월 ${day}일`;
    setDate(todayDate);
  };

  useEffect(() => {
    handleDate();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      id: Date.now(),
      title,
      pos,
      content,
      date,
    };
    setTitle("");
    setContent(<div></div>);
    setPos("");
    inputRef.current.value = "";
    editor.setData("");
    UpdatePost(post);
  };

  return (
    <div className={styles.Diary}>
      <Header authService={authService} Logout={onLogout} />
      <div className={styles.Editor}>
        <h2 className={styles.greeting}>오늘의 하루를 기록하세요</h2>
        <h4 className={styles.Date}>{date}</h4>
        <input
          type="text"
          placeholder="제목"
          className={styles.title}
          onChange={handleTitle}
          ref={inputRef}
        />
        <Search naver={naver} />
        <StarScore />
        <form className={styles.Editor_wrap}>
          <CKEditor
            editor={ClassicEditor}
            onReady={(editor) => setEditor(editor)}
            config={{
              plugins: [...installedPlugins, MyCustomUploadAdapterPlugin],
              toolbar: [
                "heading",
                "|",
                "fontFamily",
                "fontSize",
                "fontColor",
                "highlight",
                "|",
                "bold",
                "italic",
                "underline",
                "alignment",
                "|",
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
              image: {
                toolbar: [
                  "imageStyle:full",
                  "imageStyle:side",
                  "|",
                  "imageTextAlternative",
                ],
              },
            }}
            data="<p></p>"
            name="CKeditor"
            onChange={handleChange}
          />
          <button
            className={styles.BtnUpload}
            type="submit"
            id="BtnUpload"
            onClick={handleSubmit}
          >
            글 올리기
          </button>
        </form>
      </div>
      <Board
        userId={userId}
        deletePost={DeletePost}
        updatePost={UpdatePost}
        posts={posts}
      />
    </div>
  );
};

export default Diary;
