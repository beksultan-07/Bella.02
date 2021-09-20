import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.scss";

import img1 from "../../assets/collections/collection1.png";
import img2 from "../../assets/collections/collection2.png";
import img3 from "../../assets/collections/collection3.png";

export default function ProductSlider({ mainImg, imgShow }) {
  const [imgS, setImgS] = useState([img1, img2, img3, mainImg]);
  const [active, setActive] = useState();
  const [classNameS, setClassNameS] = useState("product__img-shell");
  const [indexImg, setindexImg] = useState();

  function showMainImg(e, el, index) {
    setClassNameS("product__img-shell");

    if (
      active !== undefined &&
      active !== "product__img-shell" &&
      indexImg !== index
    ) {
      setActive((el) => {
        return (el.target.className = "product__img-shell");
      });
    }

    if (e.target.className === "product__img-shell") {
      e.target.className = "preoduct__img-shell-active";
      setActive(e);
      setindexImg(index);
      imgShow(el);
    }
  }

  return (
    <div className="productSwiper">
      <Swiper direction={"vertical"} slidesPerView={4} spaceBetween={25}>
        {imgS.map((el, index) => {
          return (
            <SwiperSlide>
              <div className="product-img-wrap">
                <img src={el} className="productSwiper__img" />
                <div
                  className={classNameS}
                  onClick={(e) => showMainImg(e, el, index)}
                ></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
