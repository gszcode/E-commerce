import { useEffect, useState } from 'react'
import AccountTitle from '../../components/AccountTitle'
import BreadCrumbs from '../../components/BreadCrumbs'
import Sidebar from '../../components/Sidebar'
import Wrapper from '../../components/Wrapper'
import styles from './favorite_products.module.scss'
import Loader from '../../components/Loader'
import EmptyFavorite from '../Cart/EmptyCartOrFavorites'
import { Product } from '../../typescript/interfaces/product.interface'
import ProductCard from '../../components/ProductCard'
import Image from '../../components/Image'
import { RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromFavorites } from '../../store/features/favorites/favoriteSlice'

const FavoriteProducts = () => {
  const dispatch = useDispatch()
  const [favoriteState, setFavoriteState] = useState<Product[]>([])
  const { favorites } = useSelector((state: RootState) => state.favorites)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setFavoriteState(favorites)
    setLoading(false)
  }, [favorites])

  const deleteFavorite = (id: string) => {
    dispatch(removeProductFromFavorites(id))
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
            ) : favoriteState.length === 0 ? (
              <EmptyFavorite page="favorite" />
            ) : (
              <>
                {favoriteState.map((item: Product) => (
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
