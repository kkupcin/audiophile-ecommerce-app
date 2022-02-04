import styles from "../styles/LargeNav.module.css";
import { Link } from "react-router-dom";

const LargeNav = () => {
  return (
    <nav className={styles.navList}>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>
      <Link to="/headphones" className={styles.navLink}>
        Headphones
      </Link>
      <Link to="/speakers" className={styles.navLink}>
        Speakers
      </Link>
      <Link to="/earphones" className={styles.navLink}>
        Earphones
      </Link>
    </nav>
  );
};

export default LargeNav;
