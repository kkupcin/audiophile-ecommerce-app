import styles from "../styles/CompanyDesc.module.css";
import featureImgMobile from "../assets/shared/mobile/image-best-gear.jpg";

const CompanyDesc = () => {
  return (
    <section className={styles.container}>
      <img
        src={featureImgMobile}
        alt="Man listening to music"
        className={styles.featureImg}
      />
      <div className={styles.contentBox}>
        <h2 className={styles.featureTitle}>
          Bringing you the <span className={styles.featureWord}>best</span>{" "}
          audio gear
        </h2>
        <p className={styles.featureDesc}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default CompanyDesc;
