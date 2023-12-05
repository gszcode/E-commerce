import { OfferProduct } from '../../../typescript/interfaces/offer_product.interface'
import Button from '../../Button'
import styles from './product_card.module.scss'

const ProductCard = ({
  id,
  image,
  title,
  rating,
  description,
  price,
  prev_price
}: OfferProduct) => {
  return (
    <div key={id} className={styles.carousel_item}>
      <img src={image} alt={title} />
      <div className={styles.product_info}>
        <h2 className={styles.title}>{title.toLocaleUpperCase()}</h2>
        <div className={styles.rating}>
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.price_text}>
          precio: <span className={styles.price}>${price}</span>{' '}
          <span className={styles.prev_price}>${prev_price}</span>
        </p>
      </div>

      <div className={styles.button} title="Añadir al 🛒">
        <Button text="Añadir al carrito" />
      </div>
    </div>
  )
}

export default ProductCard
