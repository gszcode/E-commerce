import { Link } from 'react-router-dom'
import styles from './menu.module.scss'
import Image from '../../Image'

interface MenuProps {
  openMenu: boolean
  handleOpenMenu: () => void
}

const Menu = ({ openMenu, handleOpenMenu }: MenuProps) => {
  return (
    <div className={`${styles.menu_container} ${openMenu && styles.show}`}>
      <div className={styles.header}>
        <h4 className={styles.title}>MENÚ</h4>
        <button
          onClick={handleOpenMenu}
          className={styles.close}
          title="Cerrar"
        >
          <Image img="close" alt="Close" title="Cerrar" />
        </button>
      </div>
      <ul className={styles.list}>
        <Link className={styles.item} to="/">
          INICIO
        </Link>
        <span className={`${styles.item} ${styles.drop}`}>
          <p>ROPA</p>
          <Image img="arrow_right" alt="Arrow Right" title="Ver más de Ropa" />
        </span>
        <span className={`${styles.item} ${styles.drop}`}>
          <p>HOGAR</p>
          <Image img="arrow_right" alt="Arrow Right" title="Ver más de Hogar" />
        </span>
        <Link className={styles.item} to="/">
          BICICLETAS MONTAÑERAS
        </Link>
        <Link className={styles.item} to="/">
          CONTACTO
        </Link>
      </ul>
    </div>
  )
}

export default Menu
