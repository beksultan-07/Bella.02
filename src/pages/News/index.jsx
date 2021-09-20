import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import NewsItem from "../../components/NewsItem";

import news1 from "../../assets/news/news1.png";
import news2 from "../../assets/news/news2.png";
import news3 from "../../assets/news/news3.png";
import news4 from "../../assets/news/news4.png";

export default function News() {
  return (
    <div className={styles.news}>
      <div className={styles.container}>
        <h5 className={styles.fav__links}>
          <Link to="/">Главная /</Link> Новости
        </h5>
        <h3 className={styles.news__title}>Новости</h3>
        <div className={styles.news__list}>
          <NewsItem newsImg={news1} />
          <NewsItem newsImg={news2} />
          <NewsItem newsImg={news3} />
          <NewsItem newsImg={news4} />
          <NewsItem newsImg={news2} />
          <NewsItem newsImg={news4} />
        </div>
      </div>
    </div>
  );
}
