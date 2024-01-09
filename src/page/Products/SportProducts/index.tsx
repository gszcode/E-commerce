import Products from '..'
import { sports } from '../../../json/sports_products'

const SportProducts = () => {
  return (
    <Products
      products={sports}
      page="/ Deportivos"
      title="PRODUCTOS DEPORTIVOS"
    />
  )
}

export default SportProducts
