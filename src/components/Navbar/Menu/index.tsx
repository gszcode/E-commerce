import { Link } from 'react-router-dom'
import styles from './menu.module.scss'
import Image from '../../Image'
import { useState } from 'react'
import { SubMenu as MenuType } from '../../../typescript/types/submenu'
import SubMenu from '../SubMenu'
import { clothes_links, home_links } from '../../../json/links'

interface MenuProps {
  openMenu: boolean
  handleOpenMenu: () => void
}

const Menu = ({ openMenu, handleOpenMenu }: MenuProps) => {
  const [openSubNav, setOpenSubNav] = useState<MenuType>(null)

  const handleOpenSubNav = (menu: MenuType) => {
    setOpenSubNav(() => (openSubNav === menu ? null : menu))
  }

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
        <Link className={styles.item} to="/" onClick={handleOpenMenu}>
          INICIO
        </Link>
        <Link className={styles.item} to="/products" onClick={handleOpenMenu}>
          PRODUCTOS
        </Link>
        <span onClick={() => handleOpenSubNav('clothes')}>
          <p className={`${styles.item} ${styles.drop}`}>
            ROPA
            <Image
              img="arrow_right"
              alt="Arrow Right"
              title="Ver más de Ropa"
            />
          </p>
          {/* submenu */}
          {openSubNav === 'clothes' && (
            <SubMenu
              handleOpenSubNav={handleOpenSubNav}
              links={clothes_links}
              handleOpenMenu={handleOpenMenu}
            />
          )}
        </span>
        <span onClick={() => handleOpenSubNav('home')}>
          <p className={`${styles.item} ${styles.drop}`}>
            HOGAR
            <Image
              img="arrow_right"
              alt="Arrow Right"
              title="Ver más de Hogar"
            />
          </p>
          {/* submenu */}
          {openSubNav === 'home' && (
            <SubMenu
              handleOpenSubNav={handleOpenSubNav}
              links={home_links}
              handleOpenMenu={handleOpenMenu}
            />
          )}
        </span>
        <Link
          className={styles.item}
          to="/products/sports"
          onClick={handleOpenMenu}
        >
          PRODUCTOR DEPORTIVOS
        </Link>
        <Link className={styles.item} to="/contact" onClick={handleOpenMenu}>
          CONTACTO
        </Link>
      </ul>
    </div>
  )
}

export default Menu
