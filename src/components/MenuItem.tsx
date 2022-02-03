import styles from "../styles/MenuItem.module.css";
import ButtonSecondary from "./ButtonSecondary";

const MenuItem = (props: any) => {
  return (
    <div className={styles.menuItemBox}>
      <div className={styles.backgroundColorBox}>
        <div className={styles.backgroundContentBox}>
          <img
            src={props.categoryImgSrc}
            className={styles.menuItemImg}
            alt={props.categoryTitle}
          />
          <h2 className={styles.menuItemTitle}>{props.categoryTitle}</h2>
          <ButtonSecondary title="Shop" />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
