import { Link } from 'react-router-dom'
import styles from './service_card.module.scss'
import { Service } from '../../../typescript/interfaces/service.interface'

const ServiceCard = ({ icon, title, link, description }: Service) => {
  return (
    <div className={styles.service}>
      <img src={icon} alt={title} />
      <div>
        <Link to={`/${link}`} className={styles.title}>
          {title}
        </Link>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
