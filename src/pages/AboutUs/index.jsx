import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

import about1 from "../../assets/about/about1.png";
import about2 from "../../assets/about/about2.png";
import about3 from "../../assets/about/about3.png";
import logo from "../../assets/about/logo.png";

export default function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.container}>
        <h5>
          <Link to="/">Главная /</Link> О нас
        </h5>
        <h3 className={styles.aboutUs__title}>О нас</h3>
        <div className={styles.wrap_title_img}>
          <img className={styles.aboutUs__img1} src={about1} alt="" />

          <div className={styles.aboutUs_title_text}>
            <img className={styles.aboutUs__logo} src={logo} alt="" />

            <p className={styles.aboutUs_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis enim lobortis scelerisque fermentum dui
              faucibus in ornare quam viverra orci sagittis eu volutpat odio
              facilisis mauris sit amet massa vitae tortor condimentum lacinia
              quis vel eros donec ac odio tempor orci dapibus ultrices in
              iaculis nunc sed augue lacus, viverra vitae congue eu, consequat
              ac felis donec et odio pellentesque diam volutpat commodo sed
              egestas egestas fringilla phasellus faucibus
            </p>

            <img src={about3} alt="" />
          </div>
        </div>
        <div className={styles.img_text}>
          <img src={about2} alt="" />
          <p className={styles.img_text__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra orci sagittis eu volutpat odio facilisis
            mauris sit amet massa vitae tortor condimentum lacinia quis vel eros
            donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue
            lacus, viverra vitae congue eu, consequat ac felis donec et odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla
            phasellus faucibus
          </p>
        </div>
      </div>
    </section>
  );
}
