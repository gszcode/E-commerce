import { useEffect, useState } from 'react'
import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../components/Wrapper'
import styles from './favorite_products.module.scss'
import { storeFavorites } from '../../utils/getProductsFavorites'
import Loader from '../../components/Loader'
import EmptyFavorite from '../Cart/EmptyCartOrFavorites'
import { Product } from '../../typescript/interfaces/product.interface'
import ProductCard from '../../components/ProductCard'
import Image from '../../components/Image'

const FavoriteProducts = () => {
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setFavorites(storeFavorites)
    setLoading(false)
  }, [])

  const deleteFavorite = (id: string) => {
    const favorites = storeFavorites.filter((prod: Product) => prod.id !== id)

    localStorage.setItem('favorites', JSON.stringify(favorites))
    window.location.reload()
  }

  return (
    <section className={styles.container}>
      <BreadCrumbs page="Mi cuenta / Mis productos favoritos" />
      <Wrapper>
        <>
          <Sidebar />
          <div className={styles.products}>
            <div className={styles.title}>
              <AccountTitle title="MIS PRODUCTOS FAVORITOS" />
            </div>
            {loading ? (
              <Loader />
            ) : favorites.length === 0 ? (
              <EmptyFavorite page="favorite" />
            ) : (
              <>
                {favorites.map((item: Product) => (
                  <div key={item.id} className={styles.favorite_product}>
                    <button
                      className={`icon_btn ${styles.remove_button}`}
                      onClick={() => deleteFavorite(item.id)}
                    >
                      <Image
                        img="close"
                        alt="Eliminar"
                        title="Eliminar del carrito"
                      />
                    </button>
                    <ProductCard {...item} />
                  </div>
                ))}
              </>
            )}
          </div>
        </>
      </Wrapper>
    </section>
  )
}

export default FavoriteProducts
