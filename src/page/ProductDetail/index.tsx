import { useParams } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs'
import styles from './product_detail.module.scss'
import Button from '../../components/Button'

const ProductDetail = () => {
  const { id } = useParams()
  console.log(id)

  return (
    <section className={styles.container}>
      <BreadCrumbs page="id" />
      <div className={styles.product}>
        <div className={styles.detail}>
          <div className={styles.image_container}>
            <div className={styles.img}>
              <img src="/assets/bike_01.jpg" alt="product" />
            </div>
            <div className={styles.secondary_imgs}>
              <img src="/assets/bike_02.jpg" alt="product" />
              <img src="/assets/bike_03.jpg" alt="product" />
              <img src="/assets/bike_04.jpg" alt="product" />
            </div>
          </div>
          <div className={styles.shopping_container}>
            <h3 className={styles.title}>VINOTECA DOBLE TRISTAR WR7512</h3>
            <span className={styles.price}>744,92€</span>
            <p className={styles.rating}>
              ★ ★ ★ ★ ★ <span>( 0 Opiniones )</span>
            </p>
            <select className={styles.amount}>
              <option>
                Cantidad: 1 <span className={styles.s}>(100 disponibles)</span>
              </option>
              <option>Cantidad: 2</option>
              <option>Cantidad: 3</option>
            </select>
            <div className={styles.btn_container}>
              <Button text="AÑADIR AL CARRITO" />
              <button className={styles.favorite}>
                <span>❤</span> AÑADIR A FAVORITOS
              </button>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.data_container}>
            <h4 className={styles.title}>DESCRIPCIÓN</h4>
            <p className={styles.data}>
              ¡Te presentamos{' '}
              <span className={styles.product_name}>
                Anillo Mujer Folli Follie 3R0F044C (16,8 mm)
              </span>{' '}
              y una amplia gama de anillos, pulseras, pendientes, colgantes,
              etc., a buen precio. Descubre exclusivas y elegantes piezas de
              joyería y bisutería para todos los gustos y estilos.
            </p>
          </div>
          <div className={styles.data_container}>
            <h4 className={styles.title}>CARACTERÍSTICAS:</h4>
            <p className={styles.data}>
              <ul className={styles.list}>
                <li>Potencia: 140 W</li>
                <li>Frecuencia: 50 Hz</li>
                <li>Tensión: 220-240 V</li>
                <li>Intervalo de temperatura: 7-18 °C</li>
                <li>Enfría bajo la temperatura ambiente hasta: 18°C</li>
                <li>Clase energética: C</li>
                <li>Consumo de energía anual: 193 kWh</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
