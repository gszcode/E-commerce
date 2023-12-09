import { useState } from 'react'
import SubNav from './SubNav'
import styles from './lgnavbar.module.scss'
import { Link } from 'react-router-dom'
import { clothes_links, home_links } from '../../json/links'
import { SubMenu } from '../../typescript/types/submenu'

const LGNavbar: React.FC = () => {
  const [openSubNav, setOpenSubNav] = useState('')

  const handleOpenSubNav = (menu: SubMenu) => {
    setOpenSubNav((prev) => (prev === menu ? '' : menu))
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
            openSubNav={openSubNav === 'clothes' && openSubNav}
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
            openSubNav={openSubNav === 'home' && openSubNav}
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
