import Products from '..'
import { products } from '../../../json/offers_products'

const OffersProducts = () => {
  return (
    <Products
      products={products}
      page="/ Ofertas"
      title="PRODUCTOS EN OFERTA"
    />
  )
}

export default OffersProducts
