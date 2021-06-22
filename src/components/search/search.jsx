import React, { useCallback, useRef, useState } from "react";
import styles from "./search.module.css";
import "./search.css";

const Search = ({ naver }) => {
  const inputRef = useRef();
  const selectRef = useRef();
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState("");
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(styles.hidden);

  const search = useCallback(
    (query) => {
      naver
        .search(query) //
        .then((places) => {
          console.log(places);
          setPlaces(places);
        });
    },
    [naver]
  );

  const handleSearch = () => {
    const value = inputRef.current.value;
    const result = search(value);
    console.log(result);
    setShow(true);
    handleHidden();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const onClick = (event) => {
    event.preventDefault();
    handleSearch();
  };

  const handleHidden = () => {
    const hidden = show ? styles.show : styles.hidden;
    setHidden(hidden);
  };

  const handleClickPlace = (e) => {
    e.preventDefault();
    // setPlace(e.target);
    // console.log(place);
    // setShow(false);
    setPlace(selectRef.current.value);
    console.log(place);
  };

  return (
    <>
      <div className={styles.Search}>
        <p className={styles.search_phrase}>위치 추가</p>
        <form>
          <input
            type="search"
            placeholder="음식점 검색"
            className={styles.search_input}
            onKeyPress={onKeyPress}
            ref={inputRef}
          />
        </form>
        <button className={styles.BtnSearch} type="submit" onClick={onClick}>
          🔍
        </button>
      </div>
      <div className={styles.Search_Result}>
        <select
          ref={selectRef}
          className={styles.selectBox}
          onChange={handleClickPlace}
        >
          {places.map((place) => (
            <option
              value={`${place.title.replace("<b>", "").replace("</b>", "")}`}
            >
              {place.title.replace("<b>", "").replace("</b>", "")}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.selected_place}></div>
    </>
  );
};

export default Search;

//
