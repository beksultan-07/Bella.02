import styles from "./styles.module.scss";
import {Link} from "react-router-dom";

import close from "../../assets/close.svg";
import productImg from "../../assets/products/product1.png";

export default function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <h5>
          <Link to="/">Главная /</Link> <Link to="/products">Товара</Link> /{" "}
          <Link to="/products">Название продукта </Link>/
          <Link to="/cart">Коризина </Link>/
          <Link to="/cart">Оформление заказа</Link>
        </h5>
        <div className={styles.cart_block}>
          <div className={styles.cart_left}>
            <div className={styles.cart__title}>Оформление заказа</div>
            <div className={styles.cart__address}>
              <h3 className={styles.cart__address_title}>Адрес доставки</h3>
              <div className={styles.cart__address_info}>
                <span className={styles.name}>Александр Пистолетов</span>
                <span className={styles.phone}>+996 (773) 870 100 </span>
              </div>
              <div className={styles.cart__address_place}>
                <span className={styles.country}>Кыргызстан</span>
                <div className={styles.town}>г.Бишкек</div>
              </div>
              <button className={styles.change}>Редактировать</button>
            </div>
            <div className={styles.cart__products}>
              <h4 className={styles.cart__products_title}>Состав заказа</h4>
              <div className={styles.cart__products_list}>
                <div className={styles.cart__products_list__item}>
                    <img src={productImg} alt="" />
                    <div className={styles.cart__products_list__item_info, styles.product_info}>
                    <h5 className={styles.product_info__name}>
                        Платье с сетчатами рукавами Платье с сетчатами рукавами
                    </h5>
                    <p className={styles.product_info__articul}>
                        <span>Артикул:</span> PL984/dakota
                    </p>
                    <p className={styles.product_info__size}>
                        <span>Размер:</span> 42-55
                    </p>
                    <p className={styles.product_info__color}>
                        <span>Цвет:</span> Бежевый
                    </p>
                    <p className={styles.product_info__count}>
                        <span>Количество товара в линейке:</span> 6 ед
                    </p>
                    <p className={styles.product_info__quantity}>
                        <span>Количество линеек: </span>
                        <div className={styles.change_quantity}>
                        <div
                            className={styles.minus}
                        >
                            -
                        </div>
                        <span>20</span>
                        <div
                            className={styles.plus}
                        >
                            +
                        </div>
                        </div>
                    </p>
                    </div>
                    <sub className={styles.cart__products_list__item_price}>
                        7229 с.<sup>7229 с.</sup>
                    </sub>
                    <sup className={styles.close}>
                        <img src={close} />
                    </sup>
                </div>
                <div className={styles.cart__products_list__item}>
                    <img src={productImg} alt="" />
                    <div className={styles.cart__products_list__item_info, styles.product_info}>
                    <h5 className={styles.product_info__name}>
                        Платье с сетчатами рукавами Платье с сетчатами рукавами
                    </h5>
                    <p className={styles.product_info__articul}>
                        <span>Артикул:</span> PL984/dakota
                    </p>
                    <p className={styles.product_info__size}>
                        <span>Размер:</span> 42-55
                    </p>
                    <p className={styles.product_info__color}>
                        <span>Цвет:</span> Бежевый
                    </p>
                    <p className={styles.product_info__count}>
                        <span>Количество товара в линейке:</span> 6 ед
                    </p>
                    <p className={styles.product_info__quantity}>
                        <span>Количество линеек: </span>
                        <div className={styles.change_quantity}>
                        <div
                            className={styles.minus}
                        >
                            -
                        </div>
                        <span>20</span>
                        <div
                            className={styles.plus}
                        >
                            +
                        </div>
                        </div>
                    </p>
                    </div>
                    <sub className={styles.cart__products_list__item_price}>
                        7229 с.<sup>7229 с.</sup>
                    </sub>
                    <sup className={styles.close}>
                        <img src={close} />
                    </sup>
                </div>
                <div className={styles.cart__products_list__item}>
                    <img src={productImg} alt="" />
                    <div className={styles.cart__products_list__item_info, styles.product_info}>
                    <h5 className={styles.product_info__name}>
                        Платье с сетчатами рукавами Платье с сетчатами рукавами
                    </h5>
                    <p className={styles.product_info__articul}>
                        <span>Артикул:</span> PL984/dakota
                    </p>
                    <p className={styles.product_info__size}>
                        <span>Размер:</span> 42-55
                    </p>
                    <p className={styles.product_info__color}>
                        <span>Цвет:</span> Бежевый
                    </p>
                    <p className={styles.product_info__count}>
                        <span>Количество товара в линейке:</span> 6 ед
                    </p>
                    <p className={styles.product_info__quantity}>
                        <span>Количество линеек: </span>
                        <div className={styles.change_quantity}>
                        <div
                            className={styles.minus}
                        >
                            -
                        </div>
                        <span>20</span>
                        <div
                            className={styles.plus}
                        >
                            +
                        </div>
                        </div>
                    </p>
                    </div>
                    <sub className={styles.cart__products_list__item_price}>
                        7229 с.<sup>7229 с.</sup>
                    </sub>
                    <sup className={styles.close}>
                        <img src={close} />
                    </sup>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cart_right, styles.sum}>
            <h4 className={styles.sum__title}>Итого</h4>
            <ul className={styles.sum__list}>
              <li>
                <span>Общая сумма</span> <span>120000 c.</span>
              </li>
              <li>
                <span>Скидка</span> <span>-20000 c.</span>
              </li>
              <li>
                <span>Итог</span> <span>100000 c.</span>
              </li>
            </ul>
            <button className={styles.checkout}>Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

