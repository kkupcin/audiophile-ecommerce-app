import styles from "../styles/CheckoutPage.module.css";
import ButtonSecondary from "./ButtonSecondary";

const CheckoutPage = () => {
  return (
    <section>
      <div className={styles.buttonBox}>
        <ButtonSecondary noArrow={true} title="Go Back" backBtn={true} />
      </div>
    </section>
  );
};

export default CheckoutPage;
