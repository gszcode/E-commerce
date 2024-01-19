import { Link } from 'react-router-dom'
import { Product } from '../../typescript/interfaces/product.interface'
import Button from '../Button'
import styles from './product_card.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useAddProductCart } from '../../hooks/useAddProductCart'

const ProductCard = ({
  id,
  images,
  product_name,
  rating,
  description,
  price,
  prev_price,
  quantity,
  size
}: Product) => {
  const { cart } = useSelector((state: RootState) => state.cart)
  const addToCart = useAddProductCart(cart)

  const createOrder = () => {
    const order = {
      id,
      product_name,
      price,
      quantity,
      size
    }
    console.log(order)
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
