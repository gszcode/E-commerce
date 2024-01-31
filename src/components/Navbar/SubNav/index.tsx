import styles from './subnav.module.scss'
import { Link } from 'react-router-dom'
import { SubMenu } from '../../../typescript/types/submenu'
import Image from '../../Image'
import { post } from '../../../services/fetch'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../../store/features/user/userSlice'

interface Links {
  link: string
  href: string
  icon?: string
}

interface SubNavProps {
  links?: Array<Links>
  openSubNav: string | boolean
  setOpenSubNav: (value: React.SetStateAction<SubMenu>) => void
  active?: boolean | null
}

const SubNav = ({ links, openSubNav, setOpenSubNav, active }: SubNavProps) => {
  const dispatch = useDispatch()

  const handleLinkClick = () => {
    setOpenSubNav(null)
  }

  const handleLogout = async () => {
    const response = await post('auth/logout')
    if (response.status === 200)
      dispatch(setUserData({ user: null, isAuthenticated: false }))
  }

  return (
    <div
      className={`${styles.subnav} ${styles[openSubNav as string]} ${
        active && styles.active
      }`}
    >
      <ul className={styles.sub_list}>
        {links &&
          links.map(({ link, href, icon }) => (
            <div key={href}>
              {link === 'Cerrar sesión' ? (
                <button className="icon_btn" onClick={handleLogout}>
                  {icon && <Image img={icon!} alt={icon!} />}
                  {link}
                </button>
              ) : (
                <Link to={`/${href}`} onClick={handleLinkClick}>
                  {icon && <Image img={icon!} alt={icon!} />}
                  {link}
                </Link>
              )}
            </div>
          ))}
      </ul>
    </div>
  )
}

export default SubNav
