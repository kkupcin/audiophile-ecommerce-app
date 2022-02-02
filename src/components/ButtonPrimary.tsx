import styles from "../styles/ButtonPrimary.module.css";

const ButtonPrimary = (props: any) => {
  return <button className={styles.button}>{props.title}</button>;
};

export default ButtonPrimary;
