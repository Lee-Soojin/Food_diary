import React, { useState } from "react";
import Header from "../header/header";
import styles from "./home.module.css";
import bg1Img from "../../image/home_bg1.jpg";
import bg2Img from "../../image/home_bg2.jpg";
import bg3Img from "../../image/home_bg3.jpg";
import { className } from "postcss-selector-parser";

const Home = ({ authService }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div className={styles.Home_Page}>
      <Header authService={authService} />
      <div className={styles.home}>
        <div className={styles.slide_section}>
          <input
            type="radio"
            name="slide"
            className={styles.slide1}
            id="slide1"
            onChange={handleChange}
          />
          <input
            type="radio"
            name="slide"
            className={styles.slide2}
            id="slide2"
            onChange={handleChange}
          />
          <input
            type="radio"
            name="slide"
            className={styles.slide3}
            id="slide3"
            onChange={handleChange}
          />
          <div className={styles.slideWrap}>
            <ul className={styles.slides}>
              <li className={styles.about1}>
                <label htmlFor="slide3" className={styles.left}></label>
                <div className={styles.about1_img} />
                <label htmlFor="slide2" className={styles.right}></label>
              </li>
              <li className={styles.about2}>
                <label htmlFor="slide1" className={styles.left}></label>
                <div className={styles.about2_img} />
                <label htmlFor="slide3" className={styles.right}></label>
              </li>
              <li className={styles.about3}>
                <label htmlFor="slide2" className={styles.left}></label>
                <div className={styles.about3_img} />
                <label htmlFor="slide1" className={styles.right}></label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
