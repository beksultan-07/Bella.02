import styles from "./styles.module.scss";

import benefits1 from "../../assets/benefits/benefits1.svg";
import benefits2 from "../../assets/benefits/benefits2.svg";
import benefits3 from "../../assets/benefits/benefits3.svg";
import benefits4 from "../../assets/benefits/benefits4.svg";

import { Link } from "react-router-dom";

export default function Benefits() {
  return (
    <div className={styles.benefits}>
      <div className={styles.container}>
        <h3 className={styles.benefits__title}>Наши преимущества</h3>
        <div className={styles.benefits__list}>
          <Link to="/products" className={styles.benefits__list__item}>
            <img src={benefits1} alt="" />
            <h4 className={styles.benefits__list__item__title}>
              Возможность оплаты при получении
            </h4>
            <p className={styles.benefits__list__item__desc}>
              Мы предлагаем возможность оплаты наложенным платежом (при
              получении)
            </p>
          </Link>
          <Link to="/products" className={styles.benefits__list__item}>
            <img src={benefits2} alt="" />
            <h4 className={styles.benefits__list__item__title}>
              Гарантия обмена и возврата товара
            </h4>
            <p className={styles.benefits__list__item__desc}>
              100% гарантия возврата товара - 14 дней на возврат, без скандалов
              и истерик.
            </p>
          </Link>
          <Link to="/products" className={styles.benefits__list__item}>
            <img src={benefits3} alt="" />
            <h4 className={styles.benefits__list__item__title}>
              Профессиональная консультация
            </h4>
            <p className={styles.benefits__list__item__desc}>
              Промокоды со скидками для постоянных клиентов, акции на новые
              позиции
            </p>
          </Link>
          <Link to="/products" className={styles.benefits__list__item}>
            <img src={benefits4} alt="" />
            <h4 className={styles.benefits__list__item__title}>
              Акции и бонусы для покупателей
            </h4>
            <p className={styles.benefits__list__item__desc}>
              Промокоды со скидками для постоянных клиентов, акции на новые
              позиции
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
