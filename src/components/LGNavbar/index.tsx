import { useState } from 'react'
import SubNav from './SubNav'
import styles from './lgnavbar.module.scss'
import { Link } from 'react-router-dom'
import { clothes_links, home_links } from '../../json/links'
import { OpenSubNavState, SubMenu } from '../../typescript/types/submenu'

const LGNavbar: React.FC = () => {
  const [openSubNav, setOpenSubNav] = useState<OpenSubNavState>({
    clothes: false,
    home: false
  })

  const handleOpenSubNav = (menu: SubMenu) => {
    if (menu === 'clothes') {
      setOpenSubNav((prev) => ({
        [menu]: !prev[menu],
        ['home']: false
      }))
    }

    if (menu === 'home') {
      setOpenSubNav((prev) => ({
        ['clothes']: false,
        [menu]: !prev[menu]
      }))
    }
  }

  return (
    <div className={styles.large_menu}>
      <ul className={styles.list}>
        <Link className={styles.item} to="/">
          INICIO
        </Link>
        <span
          onClick={() => handleOpenSubNav('clothes')}
          className={`${styles.item} ${styles.clothes}`}
        >
          ROPA
          {/* submenu */}
          <SubNav
            isOpen={openSubNav.clothes}
            links={clothes_links}
            setOpenSubNav={setOpenSubNav}
          />
        </span>
        <span
          onClick={() => handleOpenSubNav('home')}
          className={`${styles.item} ${styles.home}`}
        >
          HOGAR
          {/* submenu */}
          <SubNav
            isOpen={openSubNav.home}
            links={home_links}
            setOpenSubNav={setOpenSubNav}
          />
        </span>
        <Link className={styles.item} to="/mountain-bikes">
          BICICLETAS MONTAÑERA
        </Link>
        <Link className={styles.item} to="/contact">
          CONTACTO
        </Link>
      </ul>
    </div>
  )
}

export default LGNavbar
