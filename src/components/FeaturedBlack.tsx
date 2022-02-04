import styles from "../styles/FeaturedBlack.module.css";
import earphonesMobile from "../assets/home/mobile/image-earphones-yx1.jpg";
import ButtonPrimary from "./ButtonPrimary";

const FeaturedBlack = () => {
  return (
    <section className={styles.container}>
      <img
        src={earphonesMobile}
        className={styles.featuredImg}
        alt="Earphones"
      />
      <div className={styles.contentBox}>
        <h2 className={styles.featureTitle}>YX1 Earphones</h2>
        <ButtonPrimary title="See product" color="transparent" />
      </div>
    </section>
  );
};

export default FeaturedBlack;
