import styles from "./styles.module.scss";
import CollectionItem from "../../components/CollectionItem";

import collection1 from "../../assets/collectionPage/collection1.png";
import collection2 from "../../assets/collectionPage/collection2.png";
import collection3 from "../../assets/collectionPage/collection3.png";
import collection4 from "../../assets/collectionPage/collection4.png";

export default function Collection() {
  return (
    <div className={styles.collection}>
      <div className={styles.container}>
        <h3 className={styles.collection__title}>Коллекция</h3>
        <div className={styles.collection__list}>
          <CollectionItem collectionImg={collection1} />
          <CollectionItem collectionImg={collection2} />
          <CollectionItem collectionImg={collection3} />
          <CollectionItem collectionImg={collection4} />
          <CollectionItem collectionImg={collection1} />
          <CollectionItem collectionImg={collection2} />
          <CollectionItem collectionImg={collection3} />
          <CollectionItem collectionImg={collection4} />
          <CollectionItem collectionImg={collection1} />
          <CollectionItem collectionImg={collection2} />
          <CollectionItem collectionImg={collection3} />
          <CollectionItem collectionImg={collection4} />
        </div>
      </div>
    </div>
  );
}
