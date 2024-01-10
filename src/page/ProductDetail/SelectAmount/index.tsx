import styles from './select_amount.module.scss'
import { Product } from '../../../typescript/interfaces/product.interface'

interface SelectProps {
  productFound: Product
}

const SelectAmout = ({ productFound }: SelectProps) => {
  return (
    <select className={styles.amount} defaultValue="1">
      {productFound?.stock ? (
        <>
          <option value="1">
            Cantidad: 1{' '}
            <span className={styles.s}>({productFound.stock} disponibles)</span>
          </option>
          {[...Array(productFound.stock).keys()].map((index) => (
            <option key={index + 1} value={index + 1}>
              Cantidad: {index + 1} unidades
            </option>
          ))}
        </>
      ) : (
        <option value="1">Sin stock</option>
      )}
    </select>
  )
}

export default SelectAmout
