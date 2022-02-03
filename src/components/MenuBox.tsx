import styles from "../styles/MenuBox.module.css";
import MenuItem from "./MenuItem";
import headphonesImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

const MenuBox = () => {
  return (
    <section className={styles.menuBox}>
      <MenuItem categoryTitle="Headphones" categoryImgSrc={headphonesImg} />
      <MenuItem categoryTitle="Speakers" categoryImgSrc={speakersImg} />
      <MenuItem categoryTitle="Earphones" categoryImgSrc={earphonesImg} />
    </section>
  );
};

export default MenuBox;
