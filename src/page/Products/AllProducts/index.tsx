import Products from '..'
import { allProducts } from '../../../utils/getAllProducts'

const AllProducts = () => {
  return (
    <Products
      products={allProducts}
      page="/ Todos"
      title="TODOS LOS PRODUCTOS"
    />
  )
}

export default AllProducts
