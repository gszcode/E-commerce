import Button from '../../Button'
import styles from './product_card.module.scss'

interface Product {
  id: number
  image: string
  title: string
  rating: number
  description: string
  price: number
}

const ProductCard = ({
  id,
  image,
  title,
  rating,
  description,
  price
}: Product) => {
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
          precio: <span className={styles.price}>${price}</span>
        </p>
      </div>

      <div className={styles.button} title="Añadir al 🛒">
        <Button text="Añadir al carrito" />
      </div>
    </div>
  )
}

export default ProductCard
