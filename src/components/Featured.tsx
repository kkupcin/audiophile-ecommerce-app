import styles from "../styles/Featured.module.css";
import ButtonPrimary from "./ButtonPrimary";

const Featured = () => {
  return (
    <section className={styles.featuredBox}>
      <article className={styles.featuredTextBox}>
        <h1 className={styles.sectionTitle}>New Product</h1>
        <h2 className={styles.productTitle}>XX99 Mark II Headphones</h2>
        <p className={styles.productDesc}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonPrimary title="See product" color="orange" />
      </article>
    </section>
  );
};

export default Featured;
