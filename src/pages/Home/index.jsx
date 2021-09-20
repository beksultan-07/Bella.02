import styles from "./styles.module.scss";
import CollectionItem from "../../components/CollectionItem";
import Hero from "../../components/Hero";
import Products from "../../components/Products";

import newImg from "../../assets/products/new.svg";

import categories1 from "../../assets/categories/categories1.png";
import categories2 from "../../assets/categories/categories2.png";
import categories3 from "../../assets/categories/categories3.png";
import categories4 from "../../assets/categories/categories4.png";

import collection1 from "../../assets/collections/collection1.png";
import collection2 from "../../assets/collections/collection2.png";
import collection3 from "../../assets/collections/collection3.png";
import collection4 from "../../assets/collections/collection4.png";

import news1 from "../../assets/news/news1.png";
import news2 from "../../assets/news/news2.png";
import news3 from "../../assets/news/news3.png";
import news4 from "../../assets/news/news4.png";

import NewsItem from "../../components/NewsItem";
import Benefits from "../../components/Benefits";
import Subscribe from "../../components/Subscribe";

export default function Home() {
  return (
    <div className="main">
      <Hero />
      <div className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.categories__list}>
            <CollectionItem collectionImg={categories1} />
            <CollectionItem collectionImg={categories2} />
            <CollectionItem collectionImg={categories3} />
            <CollectionItem collectionImg={categories4} />
          </div>
        </div>
      </div>
      <div className={styles.bestsellers}>
        <div className={styles.container}>
          <h2 className={styles.bestsellers__title}>Хит продаж</h2>
          <Products />
          <p className={styles.view__all}>
            Смотреть все <span>&gt;</span>
          </p>
        </div>
      </div>
      <div className={styles.new}>
        <div className={styles.container}>
          <h2 className={styles.new__title}>Новинки</h2>
          <Products newImg={newImg} />
          <p className={styles.view__all}>
            Смотреть все <span>&gt;</span>
          </p>
        </div>
      </div>
      <div className={styles.collections}>
        <div className={styles.container}>
          <h2 className={styles.collections__title}>Коллекция</h2>
          <div className={styles.collections__list}>
            <CollectionItem collectionImg={collection1} />
            <CollectionItem collectionImg={collection2} />
            <CollectionItem collectionImg={collection3} />
            <CollectionItem collectionImg={collection4} />
          </div>
        </div>
      </div>
      <Subscribe />
      <Benefits />
      <div className={styles.news}>
        <div className={styles.container}>
          <h3 className={styles.news__title}>Новости</h3>
          <div className={styles.news__list}>
            <NewsItem newsImg={news1} />
            <NewsItem newsImg={news2} />
            <NewsItem newsImg={news3} />
            <NewsItem newsImg={news4} />
          </div>
        </div>
      </div>
    </div>
  );
}
