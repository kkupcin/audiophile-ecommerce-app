import styles from "../styles/ItemPreview.module.css";
import ButtonPrimary from "./ButtonPrimary";
import headphonesImg from "../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";

const ItemPreview = (props: any) => {
  return (
    <div className={styles.itemBox}>
      <img src={headphonesImg} className={styles.itemImg} />
      <span className={styles.newTag}>New product</span>
      <h3 className={styles.itemTitle}>XX99 Mark II Headphones</h3>
      <p className={styles.itemDesc}>
        The new XX99 Mark II headphones is the pinnacle of pristine audio. It
        redefines your premium headphone experience by reproducing the balanced
        depth and precision of studio-quality sound.
      </p>
      <ButtonPrimary color="orange" title="See product" />
    </div>
  );
};

export default ItemPreview;
