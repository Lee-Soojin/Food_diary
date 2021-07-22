import React from "react";
import Header from "../header/header";
import styles from "./home.module.css";
import ImgAbout1 from "../../image/about1_img.png";
import ImgAbout2 from "../../image/about2_img.png";
import ImgAbout3 from "../../image/about3_img.png";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = ({ authService }) => {
  return (
    <div className={styles.Home_Page}>
      <Header authService={authService} />
      <div className={styles.home}>
        <div className={styles.slide_section}>
          <input type="radio" name="slide1" id="slide1" defaultChecked />
          <input type="radio" name="slide2" id="slide2" />
          <input type="radio" name="slide3" id="slide3" />
          <div className={styles.slideWrap}>
            <ul className={styles.slides}>
              <li className={styles.about1}>
                <label htmlFor="slide3" className={styles.left}></label>
                <label htmlFor="slide2" className={styles.right}></label>
                <div className={styles.about1_img}>
                  <div className={styles.about1_description}>
                    <h3 className={styles.about1_subtitle}>
                      오늘의 음식으로 <br></br> 당신의 하루를 기록해보세요
                    </h3>
                    <img
                      src={ImgAbout1}
                      alt="foodimage"
                      className={styles.about1_descriptImg}
                    />
                    <p className={styles.about1_text}>
                      소소한 일상 내용과 함께 오늘 먹은 음식을 기록하세요
                      <br></br>
                      심심한 일기에 다양한 맛을 더해보세요<br></br>
                      시켜먹은 음식, 처음 가본 식당, 예쁜 디저트 가게 등등
                      <br></br>
                      당신의 푸드 라이프를 기록해보세요
                    </p>
                  </div>
                  <div className={styles.about1_right}></div>
                </div>
              </li>
              <li className={styles.about2}>
                <label htmlFor="slide1" className={styles.left}></label>
                <label htmlFor="slide3" className={styles.right}></label>
                <div className={styles.about2_img}>
                  <div className={styles.about2_right}></div>
                  <div className={styles.about2_description}>
                    <h3 className={styles.about2_subtitle}>
                      다양한 방식으로 <br></br> 나만의 개성넘치는 일기를
                      기록하세요
                    </h3>
                    <img
                      src={ImgAbout2}
                      alt="about2image"
                      className={styles.about2_descriptImg}
                    />
                    <p className={styles.about2_text}>
                      자유롭게 원하는 형식의 일기를 쓰고 저장하세요
                      <br></br>
                      방문한 식당의 위치를 검색하고 기록하고 <br></br>
                      오늘의 음식이 어땠는지 별점을 매겨줄 수 있어요
                      <br></br>
                      원하는 사진을 삽입하고 자유도 높은 에디터로 일기를
                      기록해보세요
                    </p>
                  </div>
                </div>
              </li>
              <li className={styles.about3}>
                <label htmlFor="slide2" className={styles.left}></label>
                <label htmlFor="slide1" className={styles.right}></label>
                <div className={styles.about3_img}>
                  <div className={styles.about3_description}>
                    <h3 className={styles.about3_subtitle}>
                      나만의 개인적인 일기장 공간을 <br></br> 마음껏 즐기세요
                    </h3>
                    <img
                      src={ImgAbout3}
                      alt="about3image"
                      className={styles.about3_descriptImg}
                    />
                    <p className={styles.about3_text}>
                      간편한 회원가입과 로그인으로 <br></br> 푸드 다이어리를
                      이용해보세요
                      <br></br>
                      Google, FaceBook 을 통한 <br></br> 소셜 로그인도 가능해요
                      <br></br>
                      공개적이지 않은 사적인 다이어리 공간을 편히 사용할 수
                      있어요
                    </p>
                  </div>
                  <div className={styles.about3_right}></div>
                </div>
              </li>
            </ul>
          </div>
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

export default Home;
