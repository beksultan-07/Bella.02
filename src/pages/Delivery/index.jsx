import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Delivery() {
  const [activeText, setActiveText] = useState({
    id: 0,
    title: "Доставка",
  });

  const [cat, setCat] = useState([
    {
      name: "Доставка",
      catText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, praesentium magnam. Perspiciatis sit officia harum voluptatibus quam fugit voluptatem laborum aspernatur ipsa, voluptate consequuntur corrupti quae saepe tenetur quos? Tenetur deserunt omnis nemo officia sunt quam facere non, odio excepturi voluptate sapiente mollitia in corrupti nesciunt voluptatum debitis eos placeat dicta dignissimos ex tempore! Amet ad officiis, libero enim quas, eveniet ipsam, eos voluptatem nesciunt nisi hic alias dignissimos atque aliquid odit in sapiente aperiam. Nam obcaecati ipsam quo adipisci repellat. Quisquam, officia? Tempora cum ipsa vero amet aspernatur, quos temporibus odit numquam, iusto, aperiam modi rerum accusamus incidunt. Veritatis libero quia omnis aspernatur, voluptates cupiditate, provident eaque nam, repellendus corporis id maiores voluptas eum corrupti officia minima aperiam. Iure nemo vel inventore sapiente, eveniet perspiciatis dignissimos facilis. Fugit, nihil cupiditate numquam velit ab dignissimos fuga mollitia porro sapiente laborum perspiciatis eligendi deleniti labore doloribus quaerat consequatur beatae consequuntur nemo, recusandae iure minus at assumenda laudantium. Corrupti, quisquam? Mollitia consectetur, porro necessitatibus corrupti vitae blanditiis a excepturi atque tempora voluptatum, deserunt dolores, esse voluptas hic unde facere ipsa. Natus, nemo pariatur. Eaque minima architecto accusantium dolorem doloremque dolore earum fugiat repellendus in obcaecati aut, eius voluptatem quod error assumenda illo.",
    },
    {
      name: "Конакты",
      catText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus",
    },
    {
      name: "Вопросы и ответы",
      catText:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, culpa. Nemo beatae sint doloremque laboriosam, nobis facere blanditiis hic! Pariatur delectus similique deserunt repellat molestias. Consequatur, maiores. Necessitatibus tempora accusamus velit in veniam enim quam illum quod, veritatis praesentium et possimus dolorum facere saepe? Nisi officiis libero asperiores ea ut accusamus ipsa, ratione vitae eligendi maxime quidem cupiditate commodi velit maiores omnis amet voluptatem quibusdam minus dicta quos saepe vel ex laborum. Ad molestiae dolor sint amet repellendus aliquid asperiores nobis, ea tempore, voluptas aperiam numquam ipsam quia explicabo dicta hic veritatis aliquam adipisci iure eum minima! Hic, perferendis voluptas blanditiis quo, dolor distinctio id est, autem deserunt maxime quod vitae unde. Tenetur expedita eligendi quos error tempore quod totam voluptate! Vero sint, voluptatem amet natus sapiente eius fugiat excepturi accusantium ratione explicabo. Repellat, numquam doloribus assumenda velit magnam natus ut vero tempore adipisci aspernatur quaerat animi eum magni saepe totam obcaecati asperiores voluptatum voluptate in quae. Sequi, quod repellat quisquam perferendis eveniet aliquam ex. Ex, minus. Error, nihil quam aperiam quisquam, nisi consequatur explicabo non voluptatum, quod minima dolorem. Atque fuga, eum cumque voluptatibus blanditiis beatae ad qui est sequi nobis consequuntur expedita adipisci ullam suscipit temporibus ipsa eveniet voluptatum, enim mollitia sed quo explicabo odio quidem aliquid! Deserunt consequatur cupiditate iure assumenda ipsa. Blanditiis, accusantium. Totam, sunt ad accusantium ipsum sit perferendis et! Culpa accusamus voluptatem ex veniam voluptates tempore aliquam impedit ipsa. Officiis quae ab laudantium pariatur molestiae suscipit atque, soluta dignissimos exercitationem ipsam a iusto repudiandae veniam nobis facilis voluptatibus optio fuga maiores voluptate temporibus. Vitae aspernatur voluptatibus asperiores amet esse, iste in consectetur velit molestias maiores, libero, cupiditate voluptate suscipit quas qui? Expedita amet, nisi ea nobis nesciunt ut id aperiam obcaecati soluta doloremque ducimus autem totam. Magnam quibusdam voluptas, dicta sint minima optio iste!",
    },
  ]);

  function changeHandler(title, index) {
    let newActiveText = { ...activeText };
    newActiveText.title = title;
    newActiveText.id = index;
    setActiveText(newActiveText);
  }

  return (
    <section className={styles.delivery}>
      <div className={styles.container}>
        <h5 className={styles.fav__links}>
          <Link to="/">Главная /</Link> Товары
        </h5>
        <div className={styles.delivery__block}>
          <ul className={styles.delivery__nav}>
            {cat.map((el, index) => {
              if (el.name === activeText.title) {
                return (
                  <li
                    key={index}
                    className={
                      (styles.delivery__nav__item,
                      styles.delivery__nav__item__active)
                    }
                    onClick={() => changeHandler(el.name, index)}
                  >
                    {el.name}
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    className={styles.delivery__nav__item}
                    onClick={() => changeHandler(el.name, index)}
                  >
                    {el.name}
                  </li>
                );
              }
            })}
          </ul>
          <div className={styles.delivery__desc}>
            <h2>{activeText.title}</h2>
            <p>{cat[activeText.id].catText}</p>
            <p>{cat[activeText.id].catText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
