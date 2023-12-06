import Offers from '../../components/Offers'
import styles from './home.module.scss'
import bannerHome from '/assets/home_banner.webp'
import bannerOutlet from '/assets/outlet_banner.webp'
import Brands from '../../components/Brands'
import Banners from '../../components/Banners'
import BannerSection from '../../components/BannerSection'

const Home = () => {
  return (
    <section className={styles.container}>
      <BannerSection img={bannerHome} alt="Banner Home" />

      {/* Banner sections */}
      <Banners />

      {/* Offer component */}
      <Offers />

      {/* Banner component */}
      <BannerSection img={bannerOutlet} alt="Banner Outlet" style="outlet" />

      {/* Brands component */}
      <Brands />
    </section>
  )
}

export default Home
