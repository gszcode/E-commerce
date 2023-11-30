import { Link } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs'
import styles from './notfound.module.scss'

const NotFound = () => {
  return (
    <section className={styles.container}>
      <BreadCrumbs page="not found" />
      <div className={styles.not_found}>
        <div className={styles.icon}>
          <img src="/icons/error.svg" alt="Error Icon" /> <span>ERROR 404</span>
        </div>
        <p className={styles.error}>
          La página a la que intentas acceder no existe.
        </p>
      </div>
      <div className={styles.back_container}>
        <Link to="/" className={styles.back}>
          <img src="/icons/back.svg" alt="Back Icon" /> RETROCEDER A LA PÁGINA
          ANTERIOR
        </Link>
        <Link to="/" className={`${styles.back} ${styles.back_home}`}>
          <img src="/icons/home.svg" alt="Home Icon" /> HOME
        </Link>
      </div>
    </section>
  )
}

export default NotFound
