import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      Footer
      <Link to="/login">Login now</Link>
    </div>
  );
};
