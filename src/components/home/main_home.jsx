import React from "react";
import Header from "../header/header";
import styles from "./main_home.module.css";
import { AiOutlineGithub } from "react-icons/ai";
import { IoFastFood } from "react-icons/io5";
import slide3Img from "../../image/home_slide_1.png";
import slide2Img from "../../image/home_slide_2.png";
import slide1Img from "../../image/home_slide_3.png";
import { Link } from "react-router-dom";

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
        <Link to="/login">
          <button className={styles.login_button}>Start !</button>
        </Link>

        <div className={styles.home_text_container}>
          <h2 className={styles.home_text_title}>
            <IoFastFood />
            오늘 하루 어떤 음식과 함께했나요?
          </h2>
          <p className={styles.home_text_body}>
            푸드 다이어리에서 일기에 맛을 더하세요 <br />
            다이어트 음식 일기, 맛집 일기, 분위기 좋은 카페 기록 등 사진 / 별점
            / 위치 추가 기능과 함께 오늘의 하루를 기록해보세요
          </p>
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
