import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useState } from "react";

import cart from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
import search from "../../assets/search.svg";
import user from "../../assets/user.svg";
import bella from "../../assets/bella.svg";

export default function Header() {
  const [userModal, setUserModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const openSearchModal = () => {
    setSearchModal(true);
  };

  const closeSearchModal = () => {
    setSearchModal(false);
  };

  const toggleUserModal = () => {
    setUserModal(!userModal);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.header__nav}>
          <Link to="/products" className={styles.header__navItem}>
            Товары
          </Link>
          <Link to="/aboutus" className={styles.header__navItem}>
            О нас
          </Link>
          <Link to="/news" className={styles.header__navItem}>
            Новости
          </Link>
          <Link to="/delivery" className={styles.header__navItem}>
            Доставка
          </Link>
          <Link to="/contacts" className={styles.header__navItem}>
            Контакты
          </Link>
        </nav>
        <Link to="/" className={styles.header__logo}>
          <img src={bella} alt="Bella" />
        </Link>
        <ul className={styles.header__actions}>
          <li onClick={openSearchModal}>
            <a>
              <span>
                <img src={search} alt="" onClick={closeSearchModal} />
              </span>
              Поиск
            </a>
          </li>
          <li>
            <Link to="/favorites">
              <span>
                <img src={heart} alt="" />
              </span>
              Избранное
            </Link>
          </li>
          <li onClick={toggleUserModal}>
            <a>
              <span>
                <img src={user} alt="" />
              </span>
              Профиль
              {/* <ul className={styles.userList}>
                <li>
                  <Link to="/cart">Мои заказы</Link>
                </li>
                <li>
                  <Link to="/profile">Профиль</Link>
                </li>
                <li>
                  <Link to="/">Выйти</Link>
                </li>
              </ul> */}
            </a>
          </li>
          <li>
            <a>
              <span>
                <img src={cart} alt="" />
              </span>
              Корзина
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
