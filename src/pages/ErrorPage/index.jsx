import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

import error from "../../assets/error.png";

export default function ErrorPage() {
  return (
    <section className={styles.error_page}>
      <div className={styles.container}>
        <button className={styles.error_page_btn}>
          <Link to="/">Bella</Link>
        </button>
        <img src={error} alt="" />
      </div>
    </section>
  );
}
