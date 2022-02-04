import styles from "../styles/FeaturedGrey.module.css";
import ButtonPrimary from "./ButtonPrimary";

const FeaturedGrey = () => {
  return (
    <section className={styles.background}>
      <h2 className={styles.featureTitle}>ZX7 Speaker</h2>
      <ButtonPrimary title="See Product" color="transparent" />
    </section>
  );
};

export default FeaturedGrey;
