import styles from "../styles/CategoryPage.module.css";
import CompanyDesc from "./CompanyDesc";
import ItemPreview from "./ItemPreview";
import MenuBox from "./MenuBox";

const CategoryPage = (props: any) => {
  return (
    <section>
      <div className={styles.headerTitleBox}>
        <h2 className={styles.headerTitle}>Headphones</h2>
      </div>
      <div className={styles.itemList}>
        <ItemPreview />
        <ItemPreview />
        <ItemPreview />
      </div>
      <MenuBox />
      <CompanyDesc />
    </section>
  );
};

export default CategoryPage;
