import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

import HeartIcon from "../../assets/heart.svg";
import CartIcon from "../../assets/cart-gold.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";

export default function SimilarProducts() {
  return (
    <div className={styles.similar}>
      <div className={styles.container}>
        <h3 className={styles.similar__title}>Похожие товары</h3>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination
          className={styles.mySwiper}
          loop
        >
          <div className={styles.similar__list}>
            <SwiperSlide>
              <Link to="/products" className={styles.similar__list_item}>
                <div className={styles.similar__list_item__img}>
                  <img src={product1} alt="" />
                  <div className={styles.heart_icon}>
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
                        <img src={CartIcon} alt="" />
                      </span>
                      Добавить в корзину
                    </p>
                  </div>
                </div>
                <div className={styles.similar__list_item__desc}>
                  <div className={styles.price_info}>
                    <div className={styles.price}>
                      <p className={styles.price_old}>12 000 с.</p>
                      <p className={styles.price_curr}>12 000 с.</p>
                    </div>
                  </div>

                  <h4 className={styles.similar__list_item__name}>
                    The Organic Cotton Clothes
                  </h4>
                  <p className={styles.size}>
                    Размер: <span>46-56s</span>
                  </p>
                  <div className={styles.colors__list}></div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/products" className={styles.similar__list_item}>
                <div className={styles.similar__list_item__img}>
                  <img src={product2} alt="" />
                  <div className={styles.heart_icon}>
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
                        <img src={CartIcon} alt="" />
                      </span>
                      Добавить в корзину
                    </p>
                  </div>
                </div>
                <div className={styles.similar__list_item__desc}>
                  <div className={styles.price_info}>
                    <div className={styles.price}>
                      <p className={styles.price_old}>12 000 с.</p>
                      <p className={styles.price_curr}>12 000 с.</p>
                    </div>
                  </div>

                  <h4 className={styles.similar__list_item__name}>
                    The Organic Cotton Clothes
                  </h4>
                  <p className={styles.size}>
                    Размер: <span>46-56s</span>
                  </p>
                  <div className={styles.colors__list}></div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/products" className={styles.similar__list_item}>
                <div className={styles.similar__list_item__img}>
                  <img src={product1} alt="" />
                  <div className={styles.heart_icon}>
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
                        <img src={CartIcon} alt="" />
                      </span>
                      Добавить в корзину
                    </p>
                  </div>
                </div>
                <div className={styles.similar__list_item__desc}>
                  <div className={styles.price_info}>
                    <div className={styles.price}>
                      <p className={styles.price_old}>12 000 с.</p>
                      <p className={styles.price_curr}>12 000 с.</p>
                    </div>
                  </div>

                  <h4 className={styles.similar__list_item__name}>
                    The Organic Cotton Clothes
                  </h4>
                  <p className={styles.size}>
                    Размер: <span>46-56s</span>
                  </p>
                  <div className={styles.colors__list}></div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/products" className={styles.similar__list_item}>
                <div className={styles.similar__list_item__img}>
                  <img src={product2} alt="" />
                  <div className={styles.heart_icon}>
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
                        <img src={CartIcon} alt="" />
                      </span>
                      Добавить в корзину
                    </p>
                  </div>
                </div>
                <div className={styles.similar__list_item__desc}>
                  <div className={styles.price_info}>
                    <div className={styles.price}>
                      <p className={styles.price_old}>12 000 с.</p>
                      <p className={styles.price_curr}>12 000 с.</p>
                    </div>
                  </div>

                  <h4 className={styles.similar__list_item__name}>
                    The Organic Cotton Clothes
                  </h4>
                  <p className={styles.size}>
                    Размер: <span>46-56s</span>
                  </p>
                  <div className={styles.colors__list}></div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/products" className={styles.similar__list_item}>
                <div className={styles.similar__list_item__img}>
                  <img src={product3} alt="" />
                  <div className={styles.heart_icon}>
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
                        <img src={CartIcon} alt="" />
                      </span>
                      Добавить в корзину
                    </p>
                  </div>
                </div>
                <div className={styles.similar__list_item__desc}>
                  <div className={styles.price_info}>
                    <div className={styles.price}>
                      <p className={styles.price_old}>12 000 с.</p>
                      <p className={styles.price_curr}>12 000 с.</p>
                    </div>
                  </div>

                  <h4 className={styles.similar__list_item__name}>
                    The Organic Cotton Clothes
                  </h4>
                  <p className={styles.size}>
                    Размер: <span>46-56s</span>
                  </p>
                  <div className={styles.colors__list}></div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/products" className={styles.similar__list_item}>
                <div className={styles.similar__list_item__img}>
                  <img src={product2} alt="" />
                  <div className={styles.heart_icon}>
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
                        <img src={CartIcon} alt="" />
                      </span>
                      Добавить в корзину
                    </p>
                  </div>
                </div>
                <div className={styles.similar__list_item__desc}>
                  <div className={styles.price_info}>
                    <div className={styles.price}>
                      <p className={styles.price_old}>12 000 с.</p>
                      <p className={styles.price_curr}>12 000 с.</p>
                    </div>
                  </div>

                  <h4 className={styles.similar__list_item__name}>
                    The Organic Cotton Clothes
                  </h4>
                  <p className={styles.size}>
                    Размер: <span>46-56s</span>
                  </p>
                  <div className={styles.colors__list}></div>
                </div>
              </Link>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
