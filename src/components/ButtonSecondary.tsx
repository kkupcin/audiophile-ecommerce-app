import styles from "../styles/ButtonSecondary.module.css";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";

const ButtonSecondary = (props: any) => {
  return (
    <button className={styles.button}>
      {props.title}
      <img src={arrow} alt="Arrow icon" className={styles.arrow}></img>
    </button>
  );
};

export default ButtonSecondary;
