import styles from "./Productos.module.css";

function Productos() {
  return (
    <section>
      <h3 className={styles.title}>Productos más solicitados</h3>
      <div className={styles.contenedorProductoGrid}>
        <div className={styles.producto}>
          <img
            src="comida-perro.jpg"
            alt=""
          />
          <p>Puppy Optistart Small Breed</p>
          <strong>$30.000</strong>
          <a className={styles.botonProducto}>Ver producto</a>
        </div>

        <div className={styles.producto}>
          <img
            src="whiskas-gato.png"
            alt=""
          />
          <p>Whiskas 10kg</p>
          <strong>$20.000</strong>
          <a className={styles.botonProducto}>Ver producto</a>
        </div>

        <div className={styles.producto}>
          <img
            src="correa-perro.jpg"
            alt=""
          />
          <p>Correa de perro corta</p>
          <strong>$10.000</strong>
          <a className={styles.botonProducto}>Ver producto</a>
        </div>

        <div className={styles.producto}>
          <img
            src="cama-mascota.jpg"
            alt=""
          />
          <p>Cama para mascotas</p>
          <strong>$100.000</strong>
          <a className={styles.botonProducto}>Ver producto</a>
        </div>

        <div className={styles.producto}>
          <img
            src="kits-juguetes.png"
            alt=""
          />
          <p>Kit de juguetes perros</p>
          <strong>$10.000</strong>
          <a className={styles.botonProducto}>Ver producto</a>
        </div>

        <div className={styles.producto}>
          <img
            src="plato-gato.jpg"
            alt=""
          />
          <p>Plato para Gato</p>
          <strong>$10.000</strong>
          <a className={styles.botonProducto}>Ver producto</a>
        </div>
      </div>
    </section>
  );
}

export default Productos;
