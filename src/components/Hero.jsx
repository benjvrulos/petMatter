import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h3 className={styles.title}>Todo para tus mascotas</h3>
        <span className={styles.subtitle}> Sin fines de lucro</span>
        <a
          href="#"
          className={styles.boton}
        >
          Ver Productos
        </a>
      </div>
    </section>
  );
}

export default Hero;
