import React, { useCallback, useRef, useState } from "react";
import styles from "./search.module.css";

const Search = ({ naver }) => {
  const [places, setPlaces] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const inputRef = useRef();

  const search = useCallback(
    (query) => {
      setSelectedPlace(null);
      naver
        .search(query) //
        .then((places) => {
          setPlaces(places);
          setSelectedPlace(null);
        });
    },
    [naver]
  );

  const handleSearch = () => {
    const value = inputRef.current.value;
    const result = search(value);
    console.log(result);
  };

  const selectPlace = (place) => {
    setSelectedPlace(place);
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
        <p>{places}</p>
      </div>
    </>
  );
};

export default Search;
