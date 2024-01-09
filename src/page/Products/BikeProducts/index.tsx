import Products from '..'
import { bikes } from '../../../json/bikes_products'

const RoadBikes = () => {
  return <Products products={bikes} page="/ Bicicletas" title="BICICLETAS" />
}

export default RoadBikes
