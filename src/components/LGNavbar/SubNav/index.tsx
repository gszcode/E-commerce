import styles from './subnav.module.scss'
import { Link } from 'react-router-dom'
import { useCloseDrop } from '../../../hooks/useCloseDrop'
import { SubMenu } from '../../../typescript/types/submenu'

interface Links {
  link: string
  href: string
}

interface SubNavProps {
  links: Array<Links>
  openSubNav: string | boolean
  setOpenSubNav: (value: React.SetStateAction<SubMenu>) => void
}

const SubNav = ({ links, openSubNav, setOpenSubNav }: SubNavProps) => {
  const { closeRef } = useCloseDrop(setOpenSubNav)

  return (
    <div
      ref={closeRef}
      className={`${styles.subnav} ${styles[openSubNav as string]}`}
    >
      <ul className={styles.sub_list}>
        {links.map(({ link, href }) => (
          <Link key={href} to={`/${href}`}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default SubNav
