import { pajamas_blankets, sneakers, underwear } from '../json/clothes_products'
import { blankets, several, sofas } from '../json/home_products'
import { sports } from '../json/sports_products'
import { bikes } from '../json/bikes_products'
import { messageToast } from '../utils/toastSuccess'
import { products } from '../json/offers_products'
import { Product } from '../typescript/interfaces/product.interface'

const allProducts = [
  ...products,
  ...pajamas_blankets,
  ...sofas,
  ...blankets,
  ...underwear,
  ...sneakers,
  ...several,
  ...sports,
  ...bikes
]

const { notify } = messageToast()

export const addProductToFavorite = (id: string) => {
  const product = allProducts.find((prod) => prod.id === id)

  const existingFavoriteString = window.localStorage.getItem('favorites')
  const existingFavorite: Product[] = existingFavoriteString
    ? JSON.parse(existingFavoriteString)
    : []

  const isProductInFavorite = existingFavorite.some(
    (favoriteProduct: { id: string }) => favoriteProduct.id === id
  )

  if (!isProductInFavorite) {
    const updatedCart = [...existingFavorite, product]

    window.localStorage.setItem('favorites', JSON.stringify(updatedCart))
    notify('Producto agregado a favoritos')
  } else {
    notify('Este producto ya está en favoritos')
  }
}
