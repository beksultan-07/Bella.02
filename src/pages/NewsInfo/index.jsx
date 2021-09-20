import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import NewsItem from "../../components/NewsItem";

import newsImg from "../../assets/newsInfo.png";

import news1 from "../../assets/news/news1.png";
import news2 from "../../assets/news/news2.png";
import news3 from "../../assets/news/news3.png";
import news4 from "../../assets/news/news4.png";

export default function NewsInfo() {
  return (
    <div className={styles.news_info}>
      <div className={styles.container}>
        <h5>
          <Link to="/">Главная /</Link> <Link to="/news">Новости</Link> / Что
          нужно знать об экологичных купальниках
        </h5>
        <div className={styles.news_block}>
          <img src={newsImg} alt="" />
          <div className={styles.news_block__info}>
            <div className={styles.date}>06.08.2020</div>
            <h3 className={styles.news_block__title}>
              Что нужно знать об экологичных купальниках
            </h3>
            <p className={styles.news_block__desc}>
              А вы знали, что ваш любимый купальник может стать одной из причин
              загрязнения планеты пластиком? Этот предмет гардероба, как
              правило, шьется из нейлона или полиэстера — синтетических
              материалов, которые разлагаются сотни лет. Во время стирки из
              таких вещей вымываются волокна микропластика: сперва они попадают
              в сточные воды, а затем в мировой океан, неся угрозу жизни всех
              его обитателей. И учитывая, как много купальников успевает пройти
              через наши гардеробы (двое из пяти американцев покупают как
              минимум один новый купальник в год), очевидно, это отнюдь не самая
              экологичная вещь на свете Но, к счастью, существует целая плеяда
              молодых брендов пляжной одежды, готовых изменить ситуацию к
              лучшему. «Когда-то мне трудно было найти красивый купальник,
              сделанный в соответствии с принципами устойчивого развития. Все
              было сшито из синтетических материалов, — рассказывает Джаная
              Вилкинс, основательница бренда SLO Active. — Хотелось предложить
              собственную альтернативу». Вилкинс признается, что в вопросе
              создания экологичной марки купальников единого регламента на этот
              счет не существует. Чтобы вещь хорошо растягивалась, в ткань так
              или иначе необходимо добавить хотя бы небольшой процент эластана.
              И все же шопинг для пляжного сезона можно сделать экологичным. Как
              именно — рассказывают основатели брендов SLO Active, Stay Wild
              Swim и Natasha Tonic.
            </p>
          </div>
        </div>
        <h1 className={styles.news__title}>Другие новости</h1>
        <div className={styles.news__list}>
          <NewsItem newsImg={news1} />
          <NewsItem newsImg={news2} />
          <NewsItem newsImg={news3} />
          <NewsItem newsImg={news4} />
        </div>
        <div to="/news" className={styles.all_news}>
          <Link to="/news">
            Все новости <code>&gt;</code>
          </Link>
        </div>
      </div>
    </div>
  );
}
