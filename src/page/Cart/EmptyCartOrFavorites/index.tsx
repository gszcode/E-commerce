import { Link } from 'react-router-dom'
import styles from './empty_cart.module.scss'
import Button from '../../../components/Button'

const EmptyCartOrFavorites = ({ page }: { page?: string }) => {
  return (
    <div className={styles.empty_cart}>
      <img
        src={`/icons/${page !== 'cart' ? 'heart.svg' : 'cart.svg'}`}
        alt={page !== 'cart' ? 'Favorite' : 'Cart'}
      />
      <p className={styles.message}>
        {page !== 'cart' ? 'FAVORITOS ESTÁ VACÍO' : 'EL CARRITO ESTÁ VACÍO'}
      </p>
      <span className={styles.description}>
        No hay artículos en{' '}
        {page !== 'cart' ? 'FAVORITOS' : 'el CARRITO de COMPRA'}
      </span>
      <Link to="/products">
        <Button text="CONTINUAR COMPRANDO" />
      </Link>
    </div>
  )
}

export default EmptyCartOrFavorites
