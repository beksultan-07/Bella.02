import { useState } from "react";
import styles from "./styles.module.scss";

import subscribe from "../../assets/subscribe/subscribe.png";
import bell from "../../assets/bell-gold.svg";

const selectArr = ["Платья", "Верхняя одежда", "Пальто", "Туники"];

export default function Subscribe() {
  const [selectList, setSelectList] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openSelect = () => {
    setSelectList(true);
  };

  const closeSelect = () => {
    setSelectList(false);
  };

  const chooseSelectedItem = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className={styles.subscribe}>
      <div className={styles.container}>
        <img src={subscribe} alt="" className={styles.subscribe__img} />
        <div className={styles.subscribe__block}>
          <h4 className={styles.subscribe__block__title}>Оформите подписку</h4>
          <p className={styles.subscribe__block__desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, id
            feugiat nec in sed eget. Turpis purus, sollicitudin quis augue
            consectetur lectus pharetra in ullamcorper. Sapien tortor, nunc
            venenatis aliquam accumsan, arcu, nibh adipiscing mattis. Bibendum
            ornare at porta sed eget ullamcorper porttitor faucibus tellus. Elit
            ullamcorper lorem in mauris.
          </p>
          <form className={styles.subscribe__block__form}>
            <input type="text" placeholder="Ваше Ф.И.О." />
            <input type="text" placeholder="WhatsApp номер" />
            <p className={styles.selected__category} onClick={openSelect}>
              {selectedItem !== null
                ? selectArr[selectedItem]
                : "Выбор категории"}
            </p>
            <ul
              className={`${styles.select__list} ${!selectList ? "hide" : ""}`}
            >
              {selectArr.map((item, i) => {
                return (
                  <li
                    className={`${styles.select__list__item} ${
                      selectedItem === i ? "active" : ""
                    }`}
                    key={i}
                    onClick={() => {
                      chooseSelectedItem(i);
                      closeSelect();
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <button type="submit">
              <span>
                <img src={bell} alt="" />
              </span>
              Подписаться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
