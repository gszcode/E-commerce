import styles from './subnav.module.scss'
import { Link } from 'react-router-dom'
import { OpenSubNavState } from '../../../typescript/types/submenu'
import { useCloseDrop } from '../../../hooks/useCloseDrop'

interface Links {
  link: string
  href: string
}

interface SubNavProps {
  isOpen: boolean
  links: Array<Links>
  setOpenSubNav: React.Dispatch<React.SetStateAction<OpenSubNavState>>
}

const SubNav = ({ isOpen, links, setOpenSubNav }: SubNavProps) => {
  const ref = useCloseDrop(setOpenSubNav)

  return (
    <div ref={ref} className={`${styles.subnav} ${isOpen ? styles.open : ''}`}>
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
