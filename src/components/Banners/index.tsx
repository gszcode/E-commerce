import styles from './home_banners.module.scss'
import Banner from './Banner'
import { banners } from '../../json/home_banner'

const Banners = () => {
  return (
    <div className={styles.sections}>
      {banners.map((banner) => (
        <Banner
          key={banner.id}
          img={banner.image}
          altText={banner.altText}
          title={banner.title}
          href={banner.href}
        />
      ))}
    </div>
  )
}

export default Banners
