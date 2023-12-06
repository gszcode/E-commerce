import { convertUppercase } from '../../utils/convertUppercase'
import styles from './home_banner.module.scss'
import { Link } from 'react-router-dom'

interface PropsBanner {
  img: string
  altText: string
  title: string
  href: string
}

const HomeBanner = ({ img, altText, title, href }: PropsBanner) => {
  const { firstLetter, restLetters } = convertUppercase(title)

  return (
    <Link
      to={`/${href}`}
      className={styles.banner_section}
      title={`${firstLetter}${restLetters}`}
    >
      <img src={img} alt={altText} />
      <span className={styles.title_section}>{title}</span>
    </Link>
  )
}

export default HomeBanner
