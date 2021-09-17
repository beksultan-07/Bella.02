import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function Collection({
  collection1,
  collection2,
  collection3,
  collection4,
}) {
  return (
    <div className={styles.collections__list}>
      <Link to="/collections" className={styles.collections__list__item}>
        <div className={styles.collections__list__item__body}>
          <img src={collection1} alt="" />
          <p>Лето</p>
        </div>
        <p className={styles.collections__list__item__bottom}>
          Смотреть все <code>&gt;</code>
        </p>
      </Link>
      <Link to="/collections" className={styles.collections__list__item}>
        <div className={styles.collections__list__item__body}>
          <img src={collection2} alt="" />
          <p>Весна</p>
        </div>
        <p className={styles.collections__list__item__bottom}>
          Смотреть все <code>&gt;</code>
        </p>
      </Link>
      <Link to="/collections" className={styles.collections__list__item}>
        <div className={styles.collections__list__item__body}>
          <img src={collection3} alt="" />
          <p>Осень</p>
        </div>
        <p className={styles.collections__list__item__bottom}>
          Смотреть все <code>&gt;</code>
        </p>
      </Link>
      <Link to="/collections" className={styles.collections__list__item}>
        <div className={styles.collections__list__item__body}>
          <img src={collection4} alt="" />
          <p>Зима</p>
        </div>
        <p className={styles.collections__list__item__bottom}>
          Смотреть все <code>&gt;</code>
        </p>
      </Link>
    </div>
  );
}
