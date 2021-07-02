import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";

const Home = ({ authService }) => {
  return (
    <>
      <Header authService={authService} />
    </>
  );
};

export default Home;
