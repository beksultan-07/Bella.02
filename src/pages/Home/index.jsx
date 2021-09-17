import styles from "./styles.module.scss";
import Collection from "../../components/Collection";
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
import News from "../../components/News";
import Benefits from "../../components/Benefits";
import Subscribe from "../../components/Subscribe";

export default function Home() {
  return (
    <div className="main">
      <Hero />
      <div className={styles.categories}>
        <div className={styles.container}>
          <Collection
            collection1={categories1}
            collection2={categories2}
            collection3={categories3}
            collection4={categories4}
          />
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
          <Collection
            collection1={collection1}
            collection2={collection2}
            collection3={collection3}
            collection4={collection4}
          />
        </div>
      </div>
      <Subscribe />
      <Benefits />
      <News />
    </div>
  );
}
