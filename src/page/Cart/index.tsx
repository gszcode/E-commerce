import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Wrapper from '../../components/Wrapper'
import styles from './cart.module.scss'
import { useEffect, useState } from 'react'
import EmptyCart from './EmptyCartOrFavorites'
import Loader from '../../components/Loader'
import CartContent from './CartContent'
import { Product } from '../../typescript/interfaces/product.interface'
import Button from '../../components/Button'
import Image from '../../components/Image'
import { TOTAL_PRICE } from '../../utils/getTotalPrice'
import { storeCart } from '../../utils/getProductsCart'

const Cart = () => {
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setCart(storeCart)
    setLoading(false)
  }, [])

  const emptyCart = () => {
    localStorage.removeItem('cart')
    window.location.reload()
  }

  return (
    <section className={styles.container}>
      <BreadCrumbs page="Carrito" />
      <Wrapper>
        <div className={styles.cart}>
          <AccountTitle title="CARRITO DE COMPRA" />
          {loading ? (
            <Loader />
          ) : cart.length === 0 ? (
            <EmptyCart page="cart" />
          ) : (
            <>
              {cart.map((item: Product) => (
                <CartContent key={item.id} {...item} />
              ))}

              <div className={styles.buy}>
                <div className={styles.total}>
                  <p className={styles.delete_btn}>
                    TOTAL <small>(Impuestos incluidos)</small>
                  </p>
                  <span className={styles.delete_btn}>
                    {TOTAL_PRICE(cart)}$
                  </span>
                </div>
                <div className={styles.action}>
                  <Button text="COMENZAR PEDIDO" />
                  <button className={styles.empty} onClick={emptyCart}>
                    <Image img="delete" alt="Delete" /> VACIAR CARRITO
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default Cart
