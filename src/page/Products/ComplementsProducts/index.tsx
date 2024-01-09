import Products from '..'
import { complements } from '../../../json/complements_products'

const ComplementsProducts = () => {
  return (
    <Products
      products={complements}
      page="/ Complementos"
      title="COMPLEMENTOS"
    />
  )
}

export default ComplementsProducts
