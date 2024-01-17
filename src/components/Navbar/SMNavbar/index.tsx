import { Link } from 'react-router-dom'
import styles from './smnavbar.module.scss'
import { useState } from 'react'
import SubNav from '../SubNav'
import LGNavbar from '../LGNavbar'
import { active_user_menu_links, user_menu_links } from '../../../json/links'
import Image from '../../Image'
import Menu from '../Menu'
import { SubMenu } from '../../../typescript/types/submenu'
import SubNavCart from '../SubNavCart'
import { useAuthenticate } from '../../../hooks/useAuthenticate'
import { useCloseDrop } from '../../../hooks/useCloseDrop'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

const SMNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState<SubMenu>(null)
  const { isAuthenticated } = useAuthenticate()
  const { closeRef } = useCloseDrop(setOpenUserMenu)
  const { cart } = useSelector((state: RootState) => state.cart)

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
          imperio <span>shoes</span>
        </Link>
      </div>

      {/* Menu mobile */}
      <Menu openMenu={openMenu} handleOpenMenu={handleOpenMenu} />

      {/* Menu Escritorio */}
      <LGNavbar />

      <div className={styles.icons} ref={closeRef}>
        <Image img="search" alt="Search" title="Buscar" />
        {cart.length > 0 ? (
          <>
            <Link to="/products/cart" className={styles.cart}>
              <span className={styles.count}>{cart.length}</span>
              <Image img="cart" alt="Cart" title="Carrito" />
            </Link>
          </>
        ) : (
          <button onClick={() => handleOpenSubNav('cart')} className="icon_btn">
            <Image img="cart" alt="Cart" title="Carrito" />

            {openUserMenu === 'cart' && (
              <SubNavCart
                openSubNav={openUserMenu}
                setOpenSubNav={setOpenUserMenu}
              />
            )}
          </button>
        )}
        <button onClick={() => handleOpenSubNav('user')} className="icon_btn">
          <Image img="user" alt="User" title="Mi cuenta" />

          {openUserMenu === 'user' && (
            <SubNav
              links={isAuthenticated ? active_user_menu_links : user_menu_links}
              openSubNav={openUserMenu}
              setOpenSubNav={setOpenUserMenu}
              active={isAuthenticated && true}
            />
          )}
        </button>
      </div>
    </nav>
  )
}

export default SMNavbar
