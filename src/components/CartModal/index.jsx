import styles from "./styles.module.scss";
import product5 from "../../assets/products/product5.png";
import { Link } from "react-router-dom";
import close from "../../assets/close.svg";

export default function CartModal({ cartModal, toggleCartModal }) {
  return (
    <div className={`${styles.cart__modal} ${!cartModal ? "hide" : ""}`}>
      <div className={styles.cart__modal__list}>
        <div
          className={styles.cart__modal__list__item}
          key="Платье с сетчатыми рукавами"
        >
          <img src={product5} alt="" />
          <div className={styles.cart__modal__list__item__info}>
            <h4 className={styles.cart__modal__list__item__title}>
              Платье с сетчатыми рукавами
            </h4>
            <p className={styles.cart__modal__list__item__size}>
              <span>Размер:</span>
              36-35
            </p>
            <p className={styles.cart__modal__list__item__color}>
              <span>Цвет:</span>
              Бежевый
            </p>
            <div className={styles.count}>
              <div className={styles.minus}>-</div>
              <span>20</span>
              <div className={styles.plus}>+</div>
            </div>
          </div>
          <div className={styles.cart__modal__right}>
            <sup>
              <img src={close} alt="" />
            </sup>
            <p className={styles.cart__modal__price}>7229 с.</p>
          </div>
        </div>
        <div
          className={styles.cart__modal__list__item}
          key="Платье с сетчатыми рукавами"
        >
          <img src={product5} alt="" />
          <div className={styles.cart__modal__list__item__info}>
            <h4 className={styles.cart__modal__list__item__title}>
              Платье с сетчатыми рукавами
            </h4>
            <p className={styles.cart__modal__list__item__size}>
              <span>Размер:</span>
              36-35
            </p>
            <p className={styles.cart__modal__list__item__color}>
              <span>Цвет:</span>
              Бежевый
            </p>
            <div className={styles.count}>
              <div className={styles.minus}>-</div>
              <span>20</span>
              <div className={styles.plus}>+</div>
            </div>
          </div>
          <div className={styles.cart__modal__right}>
            <sup>
              <img src={close} alt="" />
            </sup>
            <p className={styles.cart__modal__price}>7229 с.</p>
          </div>
        </div>
        <div
          className={styles.cart__modal__list__item}
          key="Платье с сетчатыми рукавами"
        >
          <img src={product5} alt="" />
          <div className={styles.cart__modal__list__item__info}>
            <h4 className={styles.cart__modal__list__item__title}>
              Платье с сетчатыми рукавами
            </h4>
            <p className={styles.cart__modal__list__item__size}>
              <span>Размер:</span>
              36-35
            </p>
            <p className={styles.cart__modal__list__item__color}>
              <span>Цвет:</span>
              Бежевый
            </p>
            <div className={styles.count}>
              <div className={styles.minus}>-</div>
              <span>20</span>
              <div className={styles.plus}>+</div>
            </div>
          </div>
          <div className={styles.cart__modal__right}>
            <sup>
              <img src={close} alt="" />
            </sup>
            <p className={styles.cart__modal__price}>7229 с.</p>
          </div>
        </div>
      </div>

      <div className={styles.cart__modal__checkout}>
        <p className={styles.cart__modal__checkout__quantity}>
          <span>Всего товаров : </span>
          <span>3</span>
        </p>
        <p className={styles.cart__modal__checkout__sum}>
          <span>Итого:</span>
          <span>7229 c.</span>
        </p>
        <Link to="/cart" onClick={toggleCartModal}>
          Оформить заказ
        </Link>
        <p onClick={toggleCartModal}>Продолжить покупки</p>
      </div>
    </div>
  );
}
