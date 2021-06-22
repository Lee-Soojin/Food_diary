import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./search.module.css";
import "./search.css";

const Search = ({ naver }) => {
  const inputRef = useRef();
  const listRef = useRef();
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState("");
  const [hidden, setHidden] = useState(true);
  const isHidden = hidden ? styles.hidden : styles.visible;

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
    search(value);
    setHidden(false);
  };

  const onKeyPress = (event) => {
    setPlaces([]);
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const onClick = (event) => {
    setPlaces([]);
    event.preventDefault();
    handleSearch();
  };

  const handleSelectPlace = (event) => {
    event.preventDefault();
    const selectedPlace = event.currentTarget.textContent;
    setPlace(selectedPlace);
    setHidden(true);
  };

  useEffect(() => {
    console.log("place: ", place);
  }, [place]);

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
      <div className={`${styles.Search_List}${isHidden}`}>
        <ul className={styles.list_places}>
          {places.map((place) => (
            <li
              className={styles.list_place}
              onClick={handleSelectPlace}
              key={place.mapx}
              ref={listRef}
            >
              {place.title.replace("<b>", "").replace("</b>", "")}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;

/* <div className={styles.Search_Result}>
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
      </div> */
