import styles from "../styles/ButtonSecondary.module.css";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";

const ButtonSecondary = (props: any) => {
  return (
    <button className={props.backBtn ? styles.buttonBack : styles.button}>
      {props.title}
      {!props.noArrow && (
        <img src={arrow} alt="Arrow icon" className={styles.arrow} />
      )}
    </button>
  );
};

export default ButtonSecondary;
