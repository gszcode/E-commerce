import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Wrapper from '../../components/Wrapper'
import styles from './cart.module.scss'
import { useEffect, useState } from 'react'
import EmptyCart from './EmptyCartOrFavorites'
import Loader from '../../components/Loader'
import CartContent from './CartContent'
import Button from '../../components/Button'
import Image from '../../components/Image'
import { TOTAL_PRICE } from '../../utils/getTotalPrice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { setEmptyCart } from '../../store/features/cart/cartSlice'
import { Order } from '../../typescript/interfaces/order.interface'

const Cart = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state: RootState) => state.cart)
  const { orders } = useSelector((state: RootState) => state.orders)
  const [loading, setLoading] = useState(true)

  console.log(orders)

  useEffect(() => {
    setLoading(true)
    setLoading(false)
  }, [cart])

  const emptyCart = () => {
    dispatch(setEmptyCart())
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
              {orders.map((item: Order) => (
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
