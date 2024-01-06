import BreadCrumbs from '../../components/BreadCrumbs'
import Image from '../../components/Image'
import ProductCard from '../../components/ProductCard'
import styles from './products.module.scss'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import { Product } from '../../typescript/interfaces/product.interface'

interface ProductsProps {
  products: Array<Product>
  page: string
}

const Products = ({ products, page = '' }: ProductsProps) => {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 12
  const indexOfLastProduct = (currentPage + 1) * itemsPerPage
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected)
  }

  return (
    <section className={styles.container}>
      <BreadCrumbs page={`Productos ${page}`} />
      <div className={styles.products_container}>
        <div className={styles.filters}>
          <div className={styles.filter}>
            <button title="Filtro">
              <Image img="filter" alt="Filter" /> Filtro
            </button>
            <span>
              Mostrados {currentProducts.length} productos de {products.length}
            </span>
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
          {currentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<Image img="arrow_right" alt="Next" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(products.length / itemsPerPage)}
          previousLabel={<Image img="arrow_left" alt="Prev" />}
          renderOnZeroPageCount={null}
        />
      </div>
    </section>
  )
}

export default Products
