import styles from './subnav.module.scss'
import { Link } from 'react-router-dom'
import { useCloseDrop } from '../../../hooks/useCloseDrop'
import { SubMenu } from '../../../typescript/types/submenu'
import Image from '../../Image'

interface Links {
  link: string
  href: string
  icon?: string
}

interface SubNavProps {
  links: Array<Links>
  openSubNav: string | boolean
  setOpenSubNav: (value: React.SetStateAction<SubMenu>) => void
}

const SubNav = ({ links, openSubNav, setOpenSubNav }: SubNavProps) => {
  const { closeRef } = useCloseDrop(setOpenSubNav)

  const handleLinkClick = () => {
    setOpenSubNav(null)
  }

  return (
    <div
      ref={closeRef}
      className={`${styles.subnav} ${styles[openSubNav as string]}`}
    >
      <ul className={styles.sub_list}>
        {links.map(({ link, href, icon }) => (
          <Link key={href} to={`/${href}`} onClick={handleLinkClick}>
            {icon && <Image img={icon!} alt={icon!} />}
            {link}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default SubNav
