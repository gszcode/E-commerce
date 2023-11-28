import { Link } from 'react-router-dom'
import styles from './smnavbar.module.scss'

const SMNavbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.title_container}>
        <div className={`icon`} title="Menú">
          <img src="/icons/bars.svg" alt="Bars Icon" />
        </div>
        <Link to="/" className={styles.title} title="Título">
          minimo <span>shoes</span>
        </Link>
      </div>
      <div className={styles.icons}>
        <div className={`icon`} title="Buscar">
          <img src="/icons/search.svg" alt="Search Icon" />
        </div>
        <div className={`icon`} title="Carrito">
          <img src="/icons/cart.svg" alt="Cart Icon" />
        </div>
        <div className={`icon`} title="Mi cuenta">
          <img src="/icons/user.svg" alt="User Icon" />
        </div>
      </div>
    </nav>
  )
}

export default SMNavbar
