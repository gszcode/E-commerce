import { Link } from 'react-router-dom'
import styles from './sidebar.module.scss'
import Image from '../Image'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Image img="user" alt="My account" />
          <Link to="/account">Mi cuenta</Link>
        </li>
        <li className={styles.item}>
          <Image img="cart" alt="My orders" />
          <Link to="/orders">Mis pedidos</Link>
        </li>
        <li className={styles.item}>
          <Image img="heart" alt="My favorite products" />
          <Link to="/favorite-products">Mis productos favoritos</Link>
        </li>
        <li className={styles.item}>
          <Image img="logout" alt="Logout" />
          <Link to="/logout">Cerrar sesión</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
