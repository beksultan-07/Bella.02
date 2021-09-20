import { useState } from "react";
import styles from "./styles.module.scss";

export default function Colors() {
  let [color, setColor] = useState();

  const setActiveColor = (e) => {
    setColor(e.target.attributes[1].value);
    const $parent = e.target.parentElement;
    $parent.style.border = "1px solid #000";
  };

  return (
    <div className={styles.color_choose}>
      <div className={styles.all_colors}>
        <div className={styles.color_choose_color_wrap}>
          <span
            className={`${styles.color_choose_color} ${styles.blue}`}
            onClick={(e) => setActiveColor(e)}
            value="Синий"
          ></span>
        </div>
        <div className={styles.color_choose_color_wrap}>
          <span
            className={`${styles.color_choose_color} ${styles.green}`}
            onClick={(e) => setActiveColor(e)}
            value="Зеленый"
          ></span>
        </div>
        <div className={styles.color_choose_color_wrap}>
          <span
            className={`${styles.color_choose_color} ${styles.brown}`}
            onClick={(e) => setActiveColor(e)}
            value="Коричневый"
          ></span>
        </div>
        <div className={styles.color_choose_color_wrap}>
          <span
            className={`${styles.color_choose_color} ${styles.white}`}
            onClick={(e) => setActiveColor(e)}
            value="Белый"
          ></span>
        </div>
        <div className={styles.color_choose_color_wrap}>
          <span
            className={`${styles.color_choose_color} ${styles.grey}`}
            onClick={(e) => setActiveColor(e)}
            value="Серый"
          ></span>
        </div>
        <div className={styles.color_choose_color_wrap}>
          <span
            className={`${styles.color_choose_color} ${styles.pink}`}
            onClick={(e) => setActiveColor(e)}
            value="Розовый"
          ></span>
        </div>
      </div>
    </div>
  );
}
