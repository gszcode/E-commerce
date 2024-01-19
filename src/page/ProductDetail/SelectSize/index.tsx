import { Product } from '../../../typescript/interfaces/product.interface'
import styles from './select_size.module.scss'

interface SelectProps {
  productFound: Product
  handleSelectSize: React.ChangeEventHandler<HTMLSelectElement>
}

const SelectSize = ({ productFound, handleSelectSize }: SelectProps) => {
  return (
    <>
      {productFound?.size && (
        <select
          className={styles.size}
          defaultValue="1"
          onChange={handleSelectSize}
        >
          <option value="1">Seleccionar Talle</option>
          {productFound?.size?.map((size) => (
            <option key={size}>Talle: {size}</option>
          ))}
        </select>
      )}
    </>
  )
}

export default SelectSize
