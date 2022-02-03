import styles from "../styles/FeaturedOrange.module.css";
import ButtonPrimary from "./ButtonPrimary";
import pattern from "../assets/home/desktop/pattern-circles.svg";
import speakerMobile from "../assets/home/mobile/image-speaker-zx9.png";
import speakerTablet from "../assets/home/tablet/image-speaker-zx9.png";
import speakerDesktop from "../assets/home/desktop/image-speaker-zx9.png";

const FeaturedOrange = () => {
  return (
    <section className={styles.background}>
      <img
        src={pattern}
        alt="Pattern for background"
        className={styles.pattern}
      />
      <picture className={styles.featureImg}>
        <source media="screen and (min-width:1200px)" srcSet={speakerDesktop} />
        <source media="screen and (min-width:600px)" srcSet={speakerTablet} />
        <img src={speakerMobile} alt="Speaker" />
      </picture>
      <h2 className={styles.featureTitle}>ZX9 Speaker</h2>
      <p className={styles.featureDesc}>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <ButtonPrimary color="black" title="See product" />
    </section>
  );
};

export default FeaturedOrange;
