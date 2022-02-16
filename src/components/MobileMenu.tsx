import ReactDOM from "react-dom";
import styles from "../styles/MobileMenu.module.css";
import MenuBox from "./MenuBox";

const portalDiv = document.getElementById("portal")!;

const MobileMenu = (props: any) => {
  if (!props.open) return null;

  const outerModalClickHandler = () => {
    props.modalWasClicked(true);
  };

  return ReactDOM.createPortal(
    <div className={styles.outerModalBox} onClick={outerModalClickHandler}>
      <div className={styles.modalBox}>
        <MenuBox />
      </div>
    </div>,
    portalDiv
  );
};

export default MobileMenu;
