import { Link } from 'react-router-dom'
import styles from './smnavbar.module.scss'
import LGNavbar from '../LGNavbar'
import Menu from './Menu'
import { useState } from 'react'
import Image from '../Image'
import { user_menu_links } from '../../json/links'
import { SubMenu } from '../../typescript/types/submenu'
import SubNav from '../LGNavbar/SubNav'

const SMNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState<SubMenu>(null)

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  const handleOpenSubNav = (menu: SubMenu) => {
    setOpenUserMenu(() => (openUserMenu === menu ? null : menu))
  }

  return (
    <nav className={styles.container}>
      <div className={styles.title_container}>
        <button
          onClick={handleOpenMenu}
          className={`icon_btn ${styles.bars}`}
          title="Menú"
        >
          <Image img="bars" alt="Bars" title="Menú" />
        </button>
        <Link to="/" className={styles.title} title="Título">
          minimo <span>shoes</span>
        </Link>
      </div>

      {/* Menu mobile */}
      <Menu openMenu={openMenu} handleOpenMenu={handleOpenMenu} />

      {/* Menu Escritorio */}
      <LGNavbar />

      <div className={styles.icons}>
        <Image img="search" alt="Search" title="Buscar" />
        <Image img="cart" alt="Cart" title="Carrito" />
        <button onClick={() => handleOpenSubNav('user')} className="icon_btn">
          <Image img="user" alt="User" title="Mi cuenta" />

          {openUserMenu && (
            <SubNav
              links={user_menu_links}
              openSubNav={openUserMenu}
              setOpenSubNav={setOpenUserMenu}
            />
          )}
        </button>
      </div>
    </nav>
  )
}

export default SMNavbar
