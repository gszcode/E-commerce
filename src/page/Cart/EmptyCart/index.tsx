import { Link } from 'react-router-dom'
import styles from './empty_cart.module.scss'
import Button from '../../../components/Button'

const EmptyCart = () => {
  return (
    <div className={styles.empty_cart}>
      <img src="/icons/cart.svg" alt="Cart" />
      <p className={styles.message}>EL CARRITO ESTÁ VACÍO</p>
      <span className={styles.description}>
        No hay artículos en el carrito de compra
      </span>
      <Link to="/products">
        <Button text="CONTINUAR COMPRANDO" />
      </Link>
    </div>
  )
}

export default EmptyCart
