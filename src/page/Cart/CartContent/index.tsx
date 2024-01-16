import { Link } from 'react-router-dom'
import { OrderProduct } from '../../../typescript/types/order_product'
import styles from './cart_content.module.scss'
import Image from '../../../components/Image'
import { storeCart } from '../../../utils/getProductsCart'
import { Product } from '../../../typescript/interfaces/product.interface'

const CartContent = ({
  id,
  category,
  images,
  product_name,
  size,
  price,
  quantity
}: OrderProduct) => {
  const DeleteProduct = (id: string) => {
    const updatedCart = storeCart.filter(
      (product: Product) => product.id !== id
    )

    localStorage.setItem('cart', JSON.stringify(updatedCart))
    window.location.reload()
  }

  return (
    <div className={styles.container}>
      <button className="icon_btn" onClick={() => DeleteProduct(id)}>
        <Image img="close" alt="Delete" title="Eliminar del Carrito" />
      </button>
      <div className={styles.product}>
        <Link to={`/product/${id}`} className={styles.product_img}>
          <img src={images[0]} alt={product_name} />
        </Link>
        <div className={styles.product_info}>
          <p className={styles.item}>
            Categoria: <span>{category}</span>
          </p>
          <h3 className={styles.item}>
            Producto: <span>{product_name}</span>
          </h3>
          {size && (
            <p className={styles.item}>
              Talle: <span>{size[0]}</span>
            </p>
          )}
          <p className={styles.item}>
            Precio: <span className={styles.price}>${price}</span>
          </p>
          <p className={styles.item}>
            Cantidad: <span className={styles.quantity}>{quantity}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartContent
