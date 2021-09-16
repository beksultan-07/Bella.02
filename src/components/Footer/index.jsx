import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

import ok from '../../assets/footer/ok.svg';
import vk from '../../assets/footer/vk.svg';
import insta from '../../assets/footer/insta.svg';
import fb from '../../assets/footer/fb.svg';

function Footer() {
    console.log(styles);

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__lists}>
                    <ul className={styles.footer__list}>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link__active}>Покупателям</Link>
                        </li>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link}>Как сделать заказ</Link>
                        </li>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link}>Способы оплаты</Link>
                        </li>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link}>Доставка</Link>
                        </li>
                    </ul>

                    <ul className={styles.footer__list}>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link__active}>Покупателям</Link>
                        </li>
                            <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link}>Возврат товара</Link>
                        </li>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link}>Вопросы и ответы</Link>
                        </li>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link}>Публичная оферта</Link>
                        </li>
                    </ul>

                    <ul className={styles.footer__list}>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link__active}>Компания</Link>
                        </li>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link}>О нас</Link>
                        </li>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link}>Реквизиты</Link>
                        </li>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link}>Контакты</Link>
                        </li>
                    </ul>

                    <ul className={styles.footer__list}>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link__active}>Контакты</Link>
                        </li>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link}>+996 778 898 776</Link>
                        </li>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link}>mail@zulya.kg</Link>
                        </li>
                        <li className={styles.footer__list__item}>
                            <Link href="#" className={styles.footer__list__item__link}>г.Бишкек, Чуй 23</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.footer__info}>
                    <h3 className={styles.footer__info__title}>
                        Developed by Sunrise Studio 2020
                    </h3>

                    <div className="footer__info__icons">
                        <a href='https://ok.ru/'>
                            <img src={ok} alt="" />
                        </a>
                        <a href='https://vk.com/'>
                            <img src={vk} alt="" />
                        </a>
                        <a href='https://instagram.com/'>
                            <img src={insta} alt="" />
                        </a>
                        <a href='https://facebook.com/'>
                            <img src={fb} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
