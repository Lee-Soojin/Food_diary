import React from "react";
import Header from "../header/header";
import styles from "./main_home.module.css";
import { AiOutlineGithub } from "react-icons/ai";
import slide1Img from "../../image/home_slide_1.png";

const MainHome = ({ authService }) => {
  return (
    <div className={styles.Home}>
      <Header authService={authService} />
      <div className={styles.home_container}>
        <div className={styles.slide}>
          <img src={slide1Img} alt="slide1" />
        </div>
      </div>
      <footer className={styles.footer}>
        <p className={styles.footer_text}>
          made by Lee Soojin
          <a
            href="https://github.com/Lee-Soojin/Food_diary"
            className={styles.footer_link}
          >
            <AiOutlineGithub />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default MainHome;
