import React from "react";
import styles from "../styles/HomePage.module.css";
import Featured from "./Featured";
import MenuBox from "./MenuBox";
import FeaturedOrange from "./FeaturedOrange";
import FeaturedGrey from "./FeaturedGrey";
import FeaturedBlack from "./FeaturedBlack";
import CompanyDesc from "./CompanyDesc";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <Featured />
      <MenuBox />
      <div className={styles.featuredBox}>
        <FeaturedOrange />
        <FeaturedGrey />
        <FeaturedBlack />
      </div>
      <CompanyDesc />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
