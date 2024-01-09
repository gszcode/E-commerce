import Products from '..'
import { blankets, several, sofas } from '../../../json/home_products'

const products = [...blankets, ...sofas, ...several]

const HomeProducts = () => {
  return (
    <Products products={products} page="/ Hogar" title="PRODUCTOS DE HOGAR" />
  )
}

export default HomeProducts
