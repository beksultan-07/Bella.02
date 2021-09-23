import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Pimg from "../../assets/profile.png";
import logo from "../../assets/bella.svg";

export default function Profile() {
  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <h5>
          <Link to="/">Главная /</Link> Профиль{" "}
        </h5>

        <div className={styles.profile__wrap}>
          <div className={styles.profile__workspace}>
            <h3 className={styles.profile__title}>Профиль</h3>
            <form className={styles.profile__form}>
                <label htmlFor="name">Имя</label>
                <input id="name" name="name" placeholder="Александр" />
                <label htmlFor="surname">Фамилия</label>
                <input id="surname" name="surname" placeholder="Пушкин" />
                <label htmlFor="phone">Номер телефона</label>
                <input id="phone" name="phone" placeholder="+996 (773) 870 100" />
              <button className={styles.btn__submit}>Отправить изменения</button>
            </form>
            <h3 className={styles.profile__title}>Адрес доставки</h3>
            <form className={styles.profile__form}>
                <label htmlFor="country">Страна</label>
                <input id="country" name="country" placeholder="Кыргызстан" />
                <label htmlFor="city">Город</label>
                <input id="city" name="city" placeholder="Бишкек" />
                <button className={styles.btn__submit}>Отправить изменения</button>
            </form>
          </div>
          <div className={styles.profile__img_wrap}>
            <div>
                <img src={logo} alt="" className="profile__img-logo" />
            </div>      
            <img src={Pimg} alt="" className="profile__img" />
          </div>
        </div>
      </div>
    </section>
  );
}