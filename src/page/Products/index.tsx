import BreadCrumbs from '../../components/BreadCrumbs'
import Image from '../../components/Image'
import ProductCard from '../../components/ProductCard'
import styles from './products.module.scss'
import { products } from '../../json/offers_products'
import { productsPage } from '../../json/products'

const productos = [...products, ...productsPage]

const Products = () => {
  return (
    <section className={styles.container}>
      <BreadCrumbs page="Productos" />
      <div className={styles.products_container}>
        <div className={styles.filters}>
          <div className={styles.filter}>
            <button title="Filtro">
              <Image img="filter" alt="Filter" /> Filtro
            </button>
            <span>Mostrados 24 productos de 256</span>
          </div>
          <select className={styles.select}>
            <option value="1">Selección recomendada</option>
            <option value="2">Precio (de menor a mayor)</option>
            <option value="3">Precio (de mayor a menor)</option>
            <option value="4">Ordenar (de A a Z)</option>
            <option value="5">Ordenar (de Z a A)</option>
            <option value="6">Valoración (de menor a mayor)</option>
            <option value="7">Valoración (de mayor a menor)</option>
          </select>
        </div>
        <div className={styles.products}>
          {productos.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
