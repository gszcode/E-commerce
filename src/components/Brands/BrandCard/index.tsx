import styles from './brand_card.module.scss'
import { Link } from 'react-router-dom'
import { BrandWithoutId } from '../../../typescript/types/brand'

const BrandCard = ({ image, title }: BrandWithoutId) => {
  return (
    <Link to="/" className={styles.brand}>
      <img src={image} alt={`Brand ${title}`} />
    </Link>
  )
}

export default BrandCard
