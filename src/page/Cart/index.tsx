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
import { UserApi } from '../../typescript/interfaces/user.interface'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state: RootState) => state.cart)
  const { orders } = useSelector((state: RootState) => state.orders)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector(
    (state: UserApi) => state.user as UserApi
  )

  console.log(isAuthenticated)

  useEffect(() => {
    setLoading(true)
    setLoading(false)
  }, [cart])

  const emptyCart = () => {
    dispatch(setEmptyCart())
  }

  const handleOrder = () => {
    if (!isAuthenticated) {
      navigate('/login')
    }
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
                  <button onClick={handleOrder}>
                    <Button text="COMENZAR PEDIDO" />
                  </button>
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
