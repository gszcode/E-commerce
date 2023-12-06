import TitleSubtitle from '../Title-Subtitle'
import Carousel from '../Carousel'
import styles from './offers.module.scss'
import { products } from '../../json/offers_products'

const BestSeller = () => {
  return (
    <div className={styles.container}>
      <TitleSubtitle title="OFERTAS" subtitle="PRECIOS INCREIBLES" />

      <Carousel products={products} />
    </div>
  )
}

export default BestSeller
