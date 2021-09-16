import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper";
import "swiper/components/pagination/pagination.min.css";
import "swiper/";
import { Link } from "react-router-dom";
import heroBg from "../../assets/hero-bg.png";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Swiper
        navigation={true}
        className="mySwiper"
        loop={true}
        autoHeight={true}
        pagination={{
          dynamicBullets: true,
        }}
      >
        <SwiperSlide>
          <div className={styles.heroImgWrap}>
            <img src={heroBg} alt="" className={styles.heroImg} />
            <div className={styles.heroInfo}>
              <h2 className={styles.hero__title}>
                Скидки до 70%! Вы точно захотите это увидеть
              </h2>
              <Link to="/" className={styles.hero__btn}>
                Подробнее
                <code>&gt;</code>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.heroImgWrap}>
            <img src={heroBg} alt="" className={styles.heroImg} />

            <div className={styles.heroInfo}>
              <h2 className={styles.hero__title}>
                Скидки до 70%! Вы точно захотите это увидеть
              </h2>
              <Link to="/" className={styles.hero__btn}>
                Подробнее
                <code>&gt;</code>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.heroImgWrap}>
            <img src={heroBg} alt="" className={styles.heroImg} />

            <div className={styles.heroInfo}>
              <h2 className={styles.hero__title}>
                Скидки до 70%! Вы точно захотите это увидеть
              </h2>
              <Link to="/" className={styles.hero__btn}>
                Подробнее
                <code>&gt;</code>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
