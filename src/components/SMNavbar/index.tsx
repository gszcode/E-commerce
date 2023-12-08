import { Link } from 'react-router-dom'
import styles from './smnavbar.module.scss'
import LGNavbar from '../LGNavbar'
import Menu from './Menu'
import { useState } from 'react'
import Image from '../Image'

const SMNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev)
  }

  return (
    <nav className={styles.container}>
      <div className={styles.title_container}>
        <button onClick={handleOpenMenu} className={styles.bars} title="Menú">
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
        <Image img="user" alt="User" title="Mi cuenta" />
      </div>
    </nav>
  )
}

export default SMNavbar
