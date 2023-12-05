import TitleSubtitle from '../Title-Subtitle'
import Carousel from './Carousel'
import styles from './best_seller.module.scss'

const products = [
  {
    id: 1,
    image: '/assets/best_seller_01.webp',
    title: 'Product 1',
    rating: 4,
    description: 'Description for Product 1',
    price: 50,
    prev_price: 60
  },
  {
    id: 2,
    image: '/assets/best_seller_02.webp',
    title: 'Product 2',
    rating: 3,
    description: 'Description for Product 2',
    price: 35,
    prev_price: 45
  },
  {
    id: 3,
    image: '/assets/best_seller_03.jpg',
    title: 'Product 3',
    rating: 4,
    description: 'Description for Product 3',
    price: 50,
    prev_price: 60
  },
  {
    id: 4,
    image: '/assets/best_seller_04.jpg',
    title: 'Product 4',
    rating: 3,
    description: 'Description for Product 4',
    price: 35,
    prev_price: 45
  }
]

const BestSeller = () => {
  return (
    <div className={styles.container}>
      <TitleSubtitle title="OFERTAS" subtitle="PRECIOS INCREIBLES" />

      <Carousel products={products} />
    </div>
  )
}

export default BestSeller
