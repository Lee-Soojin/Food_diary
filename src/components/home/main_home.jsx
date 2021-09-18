import React from "react";
import Header from "../header/header";
import styles from "./main_home.module.css";
import { AiOutlineGithub } from "react-icons/ai";
import slide1Img from "../../image/home_slide_1.png";
import slide2Img from "../../image/home_slide_2.png";
import slide3Img from "../../image/home_slide_3.png";

const MainHome = ({ authService }) => {
  return (
    <div className={styles.Home}>
      <Header authService={authService} />
      <div className={styles.home_container}>
        <div className={styles.slide}>
          <img src={slide1Img} alt="slide1" className={styles.slide_img_1} />
          <img src={slide2Img} alt="slide2" className={styles.slide_img_2} />
          <img src={slide3Img} alt="slide3" className={styles.slide_img_3} />
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
