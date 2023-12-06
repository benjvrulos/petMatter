import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import styles from "./Nosotros.module.css";

function Nosotros() {
  return (
    <section>
      <h3 className={styles.nosotrosTitle}>Nosotros</h3>
      <div className={styles.contenedorNosotros}>
        <div className={styles.caja}>
          <h4>Misión</h4>
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className={styles.fontIcon}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur quia amet magni eum placeat iure.
          </p>
        </div>
        <div className={styles.caja}>
          <h4>Artículos</h4>
          <FontAwesomeIcon
            icon={faPaw}
            className={styles.fontIcon}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur quia amet magni eum placeat iure.
          </p>
        </div>
        <div className={styles.caja}>
          <h4>Gratis</h4>
          <FontAwesomeIcon
            icon={faHeart}
            className={styles.fontIcon}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            consectetur quia amet magni eum placeat iure.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
