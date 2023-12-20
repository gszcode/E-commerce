import { NavLink } from 'react-router-dom'
import styles from './sidebar.module.scss'
import Image from '../Image'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Image img="user" alt="My account" />
          <NavLink to="/account" className={styles.activeLink}>
            Mi cuenta
          </NavLink>
        </li>
        <li className={styles.item}>
          <Image img="cart" alt="My orders" />
          <NavLink to="/my-orders" className={styles.activeLink}>
            Mis pedidos
          </NavLink>
        </li>
        <li className={styles.item}>
          <Image img="heart" alt="My favorite products" />
          <NavLink to="/favorite-products" className={styles.activeLink}>
            Mis productos favoritos
          </NavLink>
        </li>
        <li className={styles.item}>
          <Image img="logout" alt="Logout" />
          <NavLink to="/logout" className={styles.activeLink}>
            Cerrar sesión
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
