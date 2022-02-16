import styles from "../styles/ProductPage.module.css";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import CompanyDesc from "./CompanyDesc";
import MenuBox from "./MenuBox";
import headphonesImg from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import headphones1 from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import headphones2 from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import headphones3 from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";
import related1 from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import related2 from "../assets/shared/mobile/image-xx59-headphones.jpg";
import related3 from "../assets/shared/mobile/image-zx9-speaker.jpg";

const ProductPage = () => {
  return (
    <section>
      <div className={styles.buttonBox}>
        <ButtonSecondary noArrow={true} title="Go Back" backBtn={true} />
      </div>
      <div className={styles.productContainer}>
        <img src={headphonesImg} className={styles.productImg} />
        <span className={styles.newTag}>New product</span>
        <h3 className={styles.productTitle}>XX99 Mark II Headphones</h3>
        <p className={styles.productDesc}>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <span className={styles.productPrice}>$ 2,999</span>
        <div className={styles.cartOptions}>
          <div className={styles.counter}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <ButtonPrimary title="Add to cart" color="orange" />
        </div>
        <div className={styles.productSection}>
          <h4 className={styles.sectionTitle}>Features</h4>
          <p className={styles.sectionText}>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p className={styles.sectionText}>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
        <div className={styles.productSection}>
          <h4 className={styles.sectionTitle}>In the box</h4>
          <ul className={styles.featureList}>
            <li>
              <span>1x</span> Headphone Unit
            </li>
            <li>
              <span>2x</span> Replacement Earcups
            </li>
            <li>
              <span>1x</span> User Manual
            </li>
            <li>
              <span>1x</span> 3.5mm 5m Audio Cable
            </li>
            <li>
              <span>1x</span> Travel Bag
            </li>
          </ul>
        </div>
        <div className={styles.productGallery}>
          <img src={headphones1} />
          <img src={headphones2} />
          <img src={headphones3} />
        </div>
        <div className={styles.relatedBox}>
          <h3 className={styles.relatedTitle}>You may also like</h3>
          <div className={styles.relatedItem}>
            <img src={related1} className={styles.relatedImg} />
            <h3 className={styles.relatedTitle}>XX99 Mark I</h3>
            <ButtonPrimary color="orange" title="See product" />
          </div>
          <div className={styles.relatedItem}>
            <img src={related2} className={styles.relatedImg} />
            <h3 className={styles.relatedTitle}>XX99 Mark I</h3>
            <ButtonPrimary color="orange" title="See product" />
          </div>
          <div className={styles.relatedItem}>
            <img src={related3} className={styles.relatedImg} />
            <h3 className={styles.relatedTitle}>XX99 Mark I</h3>
            <ButtonPrimary color="orange" title="See product" />
          </div>
        </div>
      </div>
      <MenuBox />
      <CompanyDesc />
    </section>
  );
};

export default ProductPage;
