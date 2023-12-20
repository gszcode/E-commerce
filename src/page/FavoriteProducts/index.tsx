import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../components/Wrapper'
import styles from './favorite_products.module.scss'

const FavoriteProducts = () => {
  return (
    <section className={styles.container}>
      <BreadCrumbs page="Mi cuenta / Mis productos favoritos" />
      <Wrapper>
        <>
          <Sidebar />
          <div className={styles.products}>
            <AccountTitle title="MIS PRODUCTOS FAVORITOS" />
          </div>
        </>
      </Wrapper>
    </section>
  )
}

export default FavoriteProducts
