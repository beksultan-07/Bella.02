import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function CollectionItem({ collectionImg }) {
  return (
    <Link to="/collections" className={styles.collections__list__item}>
      <div className={styles.collections__list__item__body}>
        <img src={collectionImg} alt="" />
        <p>Лето</p>
      </div>
      <p className={styles.collections__list__item__bottom}>
        Смотреть все <code>&gt;</code>
      </p>
    </Link>
  );
}
