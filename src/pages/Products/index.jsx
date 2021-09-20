import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";
import product4 from "../../assets/products/product4.png";

import cart from "../../assets/cart-gold.svg";
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
    } else {
      $list.classList.add("hide");
    }
  };

  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h5 className="fav__links">
          <Link to="/">Главная /</Link> Товары{" "}
        </h5>
        <div className={styles.products__wrap}>
          <div className={styles.products_left_side}>
            <div className={styles.category}>
              <h3 className={styles.category_title}>Категория </h3>
              <ul className={styles.category__list}>
                <li className={styles.category__list__item}>
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
                return (
                  <div className={styles.products__list__item}>
                    <div className={styles.products__list__item__img}>
                      <img src={item.img} alt="" />
                      <div className={styles.heart__icon}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.2307 2.5849C17.0741 1.4283 15.5266 0.791382 13.8729 0.791382C12.4491 0.791382 11.1043 1.26357 10.0196 2.13287C8.91941 1.26357 7.57289 0.791382 6.16305 0.791382C4.50164 0.791382 2.95008 1.42857 1.79352 2.5849C0.636914 3.74126 0 5.289 0 6.94248C0 8.59619 0.636914 10.1437 1.79352 11.3L9.49137 18.9979C9.63164 19.1384 9.81582 19.2086 10 19.2086C10.1837 19.2086 10.3674 19.1386 10.5079 18.9988L18.212 11.3182C19.3652 10.1391 20 8.58947 20 6.95447C20 5.30435 19.3736 3.7547 18.2307 2.5849ZM17.1897 10.3055L10.0007 17.4724L2.81078 10.2828C1.92613 9.39787 1.43883 8.21154 1.43883 6.94248C1.43883 5.67341 1.92613 4.48709 2.81078 3.6022C3.69566 2.71755 4.88609 2.23025 6.16305 2.23025C7.41965 2.23025 8.61246 2.7197 9.52109 3.60794C9.80262 3.88349 10.2542 3.88107 10.5326 3.6022C11.4175 2.71755 12.6036 2.23025 13.8729 2.23025C15.1422 2.23025 16.3283 2.71755 17.2072 3.59642C18.0803 4.4897 18.5611 5.68228 18.5611 6.95447C18.5611 8.2113 18.072 9.40384 17.1897 10.3055Z"
                            fill="#AB844A"
                          />
                        </svg>
                      </div>
                      <div className={styles.add_to_cart}>
                        <p>
                          <span>
                            <img src={cart} alt="" />
                          </span>
                          Добавить в корзину
                        </p>
                      </div>
                    </div>
                    <div className={styles.products__list__item__desc}>
                      <div className={styles.price__info}>
                        <div className={styles.price}>
                          <p className={styles.price__old}>{item.price} с.</p>
                          <p className={styles.price__curr}>{item.price} с.</p>
                        </div>
                      </div>

                      <h4 className={styles.products__list__item__name}>
                        {item.name}
                      </h4>
                      <p className={styles.size}>
                        Размер: <span>{item.size}</span>
                      </p>
                      <div className={styles.colors__list}>
                        <div className={styles.colors__list__item}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
