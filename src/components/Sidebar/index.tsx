import { Link } from 'react-router-dom'
import styles from './sidebar.module.scss'
import Image from '../Image'
import { post } from '../../services/fetch'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../store/features/user/userSlice'

const Sidebar = () => {
  const dispatch = useDispatch()

  const handleLogout = async () => {
    const response = await post('auth/logout')
    console.log(response)
    if (response.status === 200)
      dispatch(setUserData({ user: null, isAuthenticated: false }))
  }

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
          <button className="icon_btn" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
