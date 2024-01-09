import Products from '..'
import { products } from '../../../json/offers_products'
import { productsPage } from '../../../json/products'
import { blankets, several, sofas } from '../../../json/home_products'
import {
  pajamas_blankets,
  sneakers,
  underwear
} from '../../../json/clothes_products'
const allProducts = [
  ...products,
  ...pajamas_blankets,
  ...sofas,
  ...blankets,
  ...underwear,
  ...sneakers,
  ...several,
  ...productsPage
]

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
