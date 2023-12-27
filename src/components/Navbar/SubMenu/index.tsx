import styles from './submenu.module.scss'
import { Link } from 'react-router-dom'
import Image from '../../Image'
import { SubMenu as MenuType } from '../../../typescript/types/submenu'

interface Links {
  link: string
  href: string
}

interface SubNavProps {
  links: Array<Links>
  handleOpenSubNav: (menu: MenuType) => void
  handleOpenMenu: () => void
}

const SubMenu = ({ handleOpenSubNav, links, handleOpenMenu }: SubNavProps) => {
  return (
    <div className={styles.submenu}>
      <p onClick={() => handleOpenSubNav(null)} className={styles.back}>
        <Image img="arrow_left" alt="Arrow Left" title="Volver" />
        VOLVER
      </p>
      <ul className={styles.sub_list}>
        {links.map(({ link, href }) => (
          <Link
            className={styles.item}
            key={href}
            to={`/${href}`}
            onClick={handleOpenMenu}
          >
            {link}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default SubMenu
