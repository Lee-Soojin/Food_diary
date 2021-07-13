import React, { useEffect, useState } from "react";
import styles from "./star_score.module.css";
import { BsStar, BsStarFill } from "react-icons/bs";

const StarScore = ({ onChange, score }) => {
  const [star, setStar] = useState([false, false, false, false, false]);
  const [number, setNumber] = useState(0);

  const handleClick = (event, index) => {
    event.preventDefault();
    let starState = [...star];
    for (let i = 0; i < 5; i++) {
      if (i <= index) {
        starState[i] = true;
      } else {
        starState[i] = false;
      }
    }
    setStar(starState);
    setNumber(index + 1);
    onChange(number);
  };

  const array = [0, 1, 2, 3, 4];

  return (
    <>
      <div className={styles.Star_container}>
        {array.map((num) =>
          star[num] ? (
            <BsStarFill
              className={styles.fullstar}
              onClick={(e) => handleClick(e, num)}
              value={num}
            ></BsStarFill>
          ) : (
            <BsStar
              className={styles.star}
              onClick={(e) => handleClick(e, num)}
              value={num}
            ></BsStar>
          )
        )}
        {number > 0 && <p className={styles.score_number}>{number}</p>}
      </div>
    </>
  );
};

export default StarScore;
