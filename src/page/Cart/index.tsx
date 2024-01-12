import { Link } from 'react-router-dom'
import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Button from '../../components/Button'
import Wrapper from '../../components/Wrapper'
import styles from './cart.module.scss'

const Cart = () => {
  return (
    <section className={styles.container}>
      <BreadCrumbs page="Carrito" />
      <Wrapper>
        <div className={styles.cart}>
          <AccountTitle title="CARRITO DE COMPRA" />
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
        </div>
      </Wrapper>
    </section>
  )
}

export default Cart
