import styles from './lgnavbar.module.scss'
import { Link } from 'react-router-dom'

const LGNavbar = () => {
  return (
    <div className={styles.large_menu}>
      <ul className={styles.list}>
        <Link to="/">INICIO</Link>
        <Link to="/clothes">ROPA</Link>
        <Link to="/home">HOGAR</Link>
        <Link to="/mountain-bikes">BICICLETAS MONTAÑERA</Link>
        <Link to="/contact">CONTACTO</Link>
      </ul>
      <div className={styles.subnav}>
        <ul className={styles.sub_list}>
          <Link to="/">Pijamas y Batamantas</Link>
          <Link to="/equipment">Ropa interior</Link>
          <Link to="/home">Zapatillas Deportivas</Link>
        </ul>
      </div>
    </div>
  )
}

export default LGNavbar
