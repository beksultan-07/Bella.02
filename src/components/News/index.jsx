import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

import news1 from "../../assets/news/news1.png";
import news2 from "../../assets/news/news2.png";
import news3 from "../../assets/news/news3.png";
import news4 from "../../assets/news/news4.png";

export default function News() {
  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <h3 className={styles.news__title}>Новости</h3>
        <div className={styles.news__list}>
          <Link to="/news" className={styles.news__list__item}>
            <img src={news1} alt="" />
            <div className={styles.news__list__item__block}>
              <p className={styles.date}>06.08.2020</p>
              <h4 className={styles.news__list__item__title}>
                Гарантия обмена и возврата товара
              </h4>
              <p className={styles.news__list__item__desc}>
                100% гарантия возврата товара - 14 дней на возврат, без
                скандалов и истерик.
              </p>
              <p className={styles.detail}>
                Подробнее <code>&gt;</code>
              </p>
            </div>
          </Link>
          <Link to="/news" className={styles.news__list__item}>
            <img src={news2} alt="" />
            <div className={styles.news__list__item__block}>
              <p className={styles.date}>06.08.2020</p>
              <h4 className={styles.news__list__item__title}>
                Гарантия обмена и возврата товара
              </h4>
              <p className={styles.news__list__item__desc}>
                100% гарантия возврата товара - 14 дней на возврат, без
                скандалов и истерик.
              </p>
              <p className={styles.detail}>
                Подробнее <code>&gt;</code>
              </p>
            </div>
          </Link>
          <Link to="/news" className={styles.news__list__item}>
            <img src={news3} alt="" />
            <div className={styles.news__list__item__block}>
              <p className={styles.date}>06.08.2020</p>
              <h4 className={styles.news__list__item__title}>
                Гарантия обмена и возврата товара
              </h4>
              <p className={styles.news__list__item__desc}>
                100% гарантия возврата товара - 14 дней на возврат, без
                скандалов и истерик.
              </p>
              <p className={styles.detail}>
                Подробнее <code>&gt;</code>
              </p>
            </div>
          </Link>
          <Link to="/news" className={styles.news__list__item}>
            <img src={news4} alt="" />
            <div className={styles.news__list__item__block}>
              <p className={styles.date}>06.08.2020</p>
              <h4 className={styles.news__list__item__title}>
                Гарантия обмена и возврата товара
              </h4>
              <p className={styles.news__list__item__desc}>
                100% гарантия возврата товара - 14 дней на возврат, без
                скандалов и истерик.
              </p>
              <p className={styles.detail}>
                Подробнее <code>&gt;</code>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
