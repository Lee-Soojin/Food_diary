import React, { useCallback, useRef, useState } from "react";
import styles from "./search.module.css";
import "./search.css";

const Search = ({ naver, ref, onChange }) => {
  const inputRef = useRef();
  const listRef = useRef();
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState("");
  const [hidden, setHidden] = useState(true);
  const isHidden = hidden ? "hidden" : "visible";
  ref = place;

  const search = useCallback(
    (query) => {
      naver
        .search(query) //
        .then((places) => {
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
    inputRef.current.value = "";
    onChange(selectedPlace);
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
      <div className={`Search_List ${isHidden}`}>
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
      <div className={styles.Search_Result}> 위치 : {place}</div>
    </>
  );
};

export default Search;
