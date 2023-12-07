import { services } from '../../json/services'
import ServiceCard from './ServiceCard'
import styles from './services.module.scss'

const Services = () => {
  return (
    <section className={styles.container}>
      <div className={styles.services_container}>
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Services
