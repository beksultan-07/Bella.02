import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Product from "../../components/Product";

import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";
import product4 from "../../assets/products/product4.png";

import Sort from "../../components/Sort";
import down from "../../assets/arrow-down.svg";

const productsArr = [
  {
    img: product1,
    name: "The Organic Cotton Clothes ",
    price: 12000,
    size: "46-56",
    discount: 35,
    id: 1,
    isFavorite: false,
  },
  {
    img: product2,
    name: "The Organic Cotton Clothes ",
    price: 12000,
    size: "46-56",
    discount: 0,
    id: 2,
    isFavorite: false,
  },
  {
    img: product3,
    name: "The Organic Cotton Clothes ",
    price: 12000,
    size: "46-56",
    discount: 0,
    id: 3,
    isFavorite: false,
  },
  {
    img: product4,
    name: "The Organic Cotton Clothes ",
    price: 12000,
    size: "46-56",
    discount: 25,
    id: 4,
    isFavorite: false,
  },
  {
    img: product1,
    name: "The Organic Cotton Clothes ",
    price: 12000,
    size: "46-56",
    discount: 0,
    id: 5,
    isFavorite: false,
  },
  {
    img: product2,
    name: "The Organic Cotton Clothes ",
    price: 12000,
    size: "46-56",
    discount: 15,
    id: 6,
    isFavorite: false,
  },
  {
    img: product3,
    name: "The Organic Cotton Clothes ",
    price: 12000,
    size: "46-56",
    discount: 5,
    id: 7,
    isFavorite: false,
  },
  {
    img: product4,
    name: "The Organic Cotton Clothes ",
    price: 12000,
    size: "46-56",
    discount: 0,
    id: 8,
    isFavorite: false,
  },
  {
    img: product1,
    name: "The Organic Cotton Clothes ",
    price: 12000,
    size: "46-56",
    discount: 0,
    id: 9,
    isFavorite: false,
  },
];

export default function Products() {
  const toggleList = (e) => {
    let $list = e.target.parentElement.parentElement.parentElement.children[1];
    if ($list.classList.contains("hide")) {
      $list.classList.remove("hide");
      $list.parentElement.children[0].style.color = "#AB844A";
    } else {
      $list.classList.add("hide");
      $list.parentElement.children[0].style.color = "#2b2a2a";
    }
  };

  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h5 className='fav__links'>
          <Link to='/'>Главная /</Link> Товары{" "}
        </h5>
        <div className={styles.products__wrap}>
          <div className={styles.products_left_side}>
            <div className={styles.category}>
              <h3 className={styles.category_title}>Категория </h3>
              <ul className={styles.category__list}>
                <li className={`${styles.category__list__item}`}>
                  <div>
                    Верхняя одежда
                    <code>
                      <img src={down} onClick={(e) => toggleList(e)} />
                    </code>
                  </div>
                  <ul className={`${styles.category__list} hide`}>
                    <li>Верхняя одежда</li>
                    <li>Верхняя одежда</li>
                    <li>
                      <div>
                        Верхняя одежда{" "}
                        <code>
                          <img src={down} onClick={(e) => toggleList(e)} />
                        </code>
                      </div>

                      <ul className={`${styles.category__list_child} hide`}>
                        <li>Верхняя одежда</li>
                        <li>Верхняя одежда</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={styles.category__list__item}>
                  <div>
                    Платья{" "}
                    <code>
                      <img src={down} onClick={(e) => toggleList(e)} />
                    </code>
                  </div>

                  <ul className={`${styles.category__list} hide`}>
                    <li>Верхняя одежда</li>
                    <li>Верхняя одежда</li>
                    <li>
                      <div>
                        Верхняя одежда{" "}
                        <code>
                          <img src={down} onClick={(e) => toggleList(e)} />
                        </code>
                      </div>

                      <ul className={`${styles.category__list_child} hide`}>
                        <li>Верхняя одежда</li>
                        <li>Верхняя одежда</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={styles.category__list__item}>
                  <div>
                    Туники{" "}
                    <code>
                      <img src={down} onClick={(e) => toggleList(e)} />
                    </code>
                  </div>

                  <ul className={`${styles.category__list} hide`}>
                    <li>Верхняя одежда</li>
                    <li>Верхняя одежда</li>
                    <li>
                      <div>
                        Верхняя одежда{" "}
                        <code>
                          <img src={down} onClick={(e) => toggleList(e)} />
                        </code>
                      </div>

                      <ul className={`${styles.category__list_child} hide`}>
                        <li>Верхняя одежда</li>
                        <li>Верхняя одежда</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={styles.category__list__item}>
                  <div>
                    Футболки
                    <code>
                      <img src={down} onClick={(e) => toggleList(e)} />
                    </code>
                  </div>

                  <ul className={`${styles.category__list} hide`}>
                    <li>Верхняя одежда</li>
                    <li>Верхняя одежда</li>
                    <li>
                      <div>
                        Верхняя одежда{" "}
                        <code>
                          <img src={down} onClick={(e) => toggleList(e)} />
                        </code>
                      </div>

                      <ul className={`${styles.category__list_child} hide`}>
                        <li>Верхняя одежда</li>
                        <li>Верхняя одежда</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={styles.category__list__item}>
                  <div>
                    Шорты{" "}
                    <code>
                      <img src={down} onClick={(e) => toggleList(e)} />
                    </code>
                  </div>

                  <ul className={`${styles.category__list} hide`}>
                    <li>Верхняя одежда</li>
                    <li>Верхняя одежда</li>
                    <li>
                      <div>
                        Верхняя одежда{" "}
                        <code>
                          <img src={down} onClick={(e) => toggleList(e)} />
                        </code>
                      </div>

                      <ul className={`${styles.category__list_child} hide`}>
                        <li>Верхняя одежда</li>
                        <li>Верхняя одежда</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={styles.category__list__item}>
                  <div>
                    Юбки
                    <code>
                      <img src={down} onClick={(e) => toggleList(e)} />
                    </code>
                  </div>

                  <ul className={`${styles.category__list} hide`}>
                    <li>Верхняя одежда</li>
                    <li>Верхняя одежда</li>
                    <li>
                      <div>
                        Верхняя одежда{" "}
                        <code>
                          <img src={down} onClick={(e) => toggleList(e)} />
                        </code>
                      </div>

                      <ul className={`${styles.category__list_child} hide`}>
                        <li>Верхняя одежда</li>
                        <li>Верхняя одежда</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={styles.category__list__item}>
                  <div>
                    Вечерние платья
                    <code>
                      <img src={down} onClick={(e) => toggleList(e)} />
                    </code>
                  </div>

                  <ul className={`${styles.category__list} hide`}>
                    <li>Верхняя одежда</li>
                    <li>Верхняя одежда</li>
                    <li>
                      <div>
                        Верхняя одежда{" "}
                        <code>
                          <img src={down} onClick={(e) => toggleList(e)} />
                        </code>
                      </div>

                      <ul className={`${styles.category__list_child} hide`}>
                        <li>Верхняя одежда</li>
                        <li>Верхняя одежда</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={styles.category__list__item}>
                  <div>
                    Пижамы
                    <code>
                      <img src={down} onClick={(e) => toggleList(e)} />
                    </code>
                  </div>

                  <ul className={`${styles.category__list} hide`}>
                    <li>Верхняя одежда</li>
                    <li>Верхняя одежда</li>
                    <li>
                      <div>
                        Верхняя одежда{" "}
                        <code>
                          <img src={down} onClick={(e) => toggleList(e)} />
                        </code>
                      </div>

                      <ul className={`${styles.category__list_child} hide`}>
                        <li>Верхняя одежда</li>
                        <li>Верхняя одежда</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.products_right_side}>
            <div className={styles.products_right__header}>
              <h3 className={styles.products_right__title}>Все товары </h3>
              <Sort />
            </div>
            <div className={styles.products__list}>
              {productsArr.map((item) => {
                return <Product data={item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
