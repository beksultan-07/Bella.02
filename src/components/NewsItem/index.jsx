import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function NewsItem({ newsImg }) {
  return (
    <Link to="/newsInfo" className={styles.news__list__item}>
      <img src={newsImg} alt="" />
      <div className={styles.news__list__item__block}>
        <p className={styles.date}>06.08.2020</p>
        <h4 className={styles.news__list__item__title}>
          Гарантия обмена и возврата товара
        </h4>
        <p className={styles.news__list__item__desc}>
          100% гарантия возврата товара - 14 дней на возврат, без скандалов и
          истерик.
        </p>
        <p className={styles.detail}>
          Подробнее <code>&gt;</code>
        </p>
      </div>
    </Link>
  );
}
