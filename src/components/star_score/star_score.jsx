import React, { useState } from "react";
import styles from "./star_score.module.css";
import { BsStar, BsStarFill } from "react-icons/bs";

const StarScore = ({ onChange }) => {
  const [star, setStar] = useState([false, false, false, false, false]);
  const [number, setNumber] = useState(0);

  const handleMouseOver = (event) => {
    event.preventDefault();
  };

  const handleClick = (event, index) => {
    let starState = [...star];
    event.preventDefault();
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
              onMouseOver={handleMouseOver}
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
