import Products from '../..'
import { pajamas_blankets } from '../../../../json/clothes_products'

const PajamasAndBlankets = () => {
  return (
    <Products
      products={pajamas_blankets}
      page="/ Pijamas & Mantas"
      title="PIJAMAS & MANTAS"
    />
  )
}

export default PajamasAndBlankets
