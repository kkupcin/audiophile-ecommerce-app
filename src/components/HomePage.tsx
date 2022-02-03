import React from "react";
import styles from "../styles/HomePage.module.css";
import Featured from "./Featured";
import MenuBox from "./MenuBox";
import FeaturedOrange from "./FeaturedOrange";

const HomePage = () => {
  return (
    <React.Fragment>
      <Featured />
      <MenuBox />
      <FeaturedOrange />
    </React.Fragment>
  );
};

export default HomePage;
