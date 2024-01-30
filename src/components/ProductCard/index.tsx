import { Link } from 'react-router-dom'
import { Product } from '../../typescript/interfaces/product.interface'
import Button from '../Button'
import styles from './product_card.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useAddProductCart } from '../../hooks/useAddProductCart'
import { messageToast } from '../../utils/toastSuccess'
import { createProductOrder } from '../../store/features/order/orderSlice'
import { Order } from '../../typescript/interfaces/order.interface'

const ProductCard = ({
  id,
  images,
  product_name,
  rating,
  description,
  price,
  prev_price,
  quantity,
  size,
  stock
}: Product) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state: RootState) => state.cart)
  const addToCart = useAddProductCart(cart)
  const { notify, notifyError } = messageToast()

  const createOrder = () => {
    if (stock < 1) {
      notifyError('No hay stock de este producto')
      return
    }

    const order: Order = {
      id,
      product_name,
      price,
      quantity: quantity || 1,
      size: size ? size![0] : ''
    }

    console.log('Product Cart', order)

    dispatch(createProductOrder(order))
    notify('Producto agregado al carrito')
  }

  return (
    <div className={styles.container}>
      <Link to={`/product/${id}`} className={styles.carousel_item}>
        <img src={images[0]} alt={product_name} loading="lazy" />
        <div className={styles.product_info}>
          <h2 className={styles.title}>{product_name.toLocaleUpperCase()}</h2>
          <div className={styles.rating}>
            {Array.from({ length: rating }).map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>
          <p className={styles.description}>{description}</p>
          <p className={styles.price_text}>
            precio: <span className={styles.price}>${price}</span>{' '}
            {prev_price && (
              <span className={styles.prev_price}>${prev_price}</span>
            )}
          </p>
        </div>
      </Link>
      <div
        className={styles.button}
        title="Añadir al 🛒"
        onClick={() => {
          addToCart(id)
          createOrder()
        }}
      >
        <Button text="Añadir al carrito" />
      </div>
    </div>
  )
}

export default ProductCard
