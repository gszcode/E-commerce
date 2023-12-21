import { useCloseDrop } from '../../../hooks/useCloseDrop'
import { SubMenu } from '../../../typescript/types/submenu'
import styles from './subnav_cart.module.scss'

interface PropSubNav {
  openSubNav: string | boolean
  setOpenSubNav: (value: React.SetStateAction<SubMenu>) => void
}

const SubNavCart = ({ openSubNav, setOpenSubNav }: PropSubNav) => {
  const { closeRef } = useCloseDrop(setOpenSubNav)

  const handleLinkClick = () => {
    setOpenSubNav(null)
  }

  return (
    <div
      ref={closeRef}
      className={`${styles.subnav} ${styles[openSubNav as string]}`}
    >
      <ul className={styles.sub_list} onClick={handleLinkClick}>
        <img src="/icons/subnav_cart.svg" alt="Empty Cart" />
        <p>No hay productos en el carrito</p>
      </ul>
    </div>
  )
}

export default SubNavCart
