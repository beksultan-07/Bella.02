import styles from "./styles.module.scss";
import Collection from "../../components/Collection";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <div className="main">
      <Hero />
      <div className={styles.categories}>
        <div className={styles.container}>
          <Collection />
        </div>
      </div>
    </div>
  );
}
