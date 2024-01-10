import Products from '..'
import { products } from '../../../json/offers_products'
import { blankets, several, sofas } from '../../../json/home_products'
import {
  pajamas_blankets,
  sneakers,
  underwear
} from '../../../json/clothes_products'
import { sports } from '../../../json/sports_products'
import { bikes } from '../../../json/bikes_products'
const allProducts = [
  ...products,
  ...pajamas_blankets,
  ...sofas,
  ...blankets,
  ...underwear,
  ...sneakers,
  ...several,
  ...sports,
  ...bikes
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
