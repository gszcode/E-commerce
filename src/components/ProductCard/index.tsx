import { Link } from 'react-router-dom'
import { Product } from '../../typescript/interfaces/product.interface'
import Button from '../Button'
import styles from './product_card.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsToCart } from '../../store/features/cart/cartSlice'
import { allProducts } from '../../utils/getAllProducts'
import { messageToast } from '../../utils/toastSuccess'
import { RootState } from '../../store/store'

const ProductCard = ({
  id,
  images,
  product_name,
  rating,
  description,
  price,
  prev_price
}: Product) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state: RootState) => state.cart)
  const { notify, notifyError } = messageToast()

  const addToCart = (id: string) => {
    const productInCart = cart.find((prod: Product) => prod.id === id)

    if (productInCart) {
      notify('Este producto ya está en el carrito')
      return
    }

    const productFount = allProducts.find((prod) => prod.id === id)

    if (productFount && productFount?.stock > 0) {
      dispatch(setProductsToCart(productFount!))
      notify('Producto agregado al carrito')
    } else {
      notifyError('No hay stock de este producto')
    }
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
        onClick={() => addToCart(id)}
      >
        <Button text="Añadir al carrito" />
      </div>
    </div>
  )
}

export default ProductCard
