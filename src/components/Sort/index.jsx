import { useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function Sort() {
  const [sort, setSort] = useState("sort__list");
  const [sortState, setSortState] = useState(false);

  function clickSort() {
    setSort(setSortState((el) => !el));
    if (sortState) {
      setSort("sort__list sort_active");
    } else {
      setSort("sort__list");
    }
  }

  return (
    <div className={styles.sort}>
      <p className={styles.sort_title} onClick={clickSort}>
        Сортировать по <code>&or;</code>
      </p>
      <ul className={`${styles.sort_list} ${!sortState ? "hide" : ""}`}>
        <li>
          <Link to="#" className={styles.sort__item}>
            По обновлению
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.sort__item}>
            По алфавиту
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.sort__item}>
            По цене (высокая &gt; низкая){" "}
          </Link>
        </li>
        <li>
          <Link to="#" className={styles.sort__item}>
            По цене (низкая &gt; высокая)
          </Link>
        </li>
      </ul>
    </div>
  );
}
