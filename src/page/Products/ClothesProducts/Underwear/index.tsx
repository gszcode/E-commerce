import Products from '../..'
import { underwear } from '../../../../json/clothes_products'

const Underwear = () => {
  return (
    <Products
      products={underwear}
      page="/ Ropa Interior"
      title="ROPA INTERIOR"
    />
  )
}

export default Underwear
