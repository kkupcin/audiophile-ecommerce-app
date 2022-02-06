import styles from "../styles/Header.module.css";
import logo from "../assets/shared/desktop/logo.svg";
import hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = (props: any) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuHandler = () => {
    setMenuIsOpen(!menuIsOpen);
    props.isMenuOpen(menuIsOpen);
  };

  return (
    <React.Fragment>
      <header className={styles.mainHeader}>
        <menu className={styles.mainHeaderText}>
          <button className={styles.hamburgerBtn}>
            <img src={hamburger} alt="Menu icon" onClick={menuHandler}></img>
          </button>
          <img
            src={logo}
            alt="Audiophile logo"
            className={styles.mainLogo}
          ></img>
          <button className={styles.cartBtn}>
            <img src={cart} alt="Basket icon"></img>
          </button>
        </menu>
      </header>
      <MobileMenu open={menuIsOpen} modalWasClicked={menuHandler} />
    </React.Fragment>
  );
};

export default Header;
