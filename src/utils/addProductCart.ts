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

const { notify, notifyError } = messageToast()

export const addProductToCart = (id: string) => {
  const product = allProducts.find((prod) => prod.id === id)

  if (product && product.stock < 1) {
    notifyError('No hay stock de este producto')
    return
  }

  const existingCartString = window.localStorage.getItem('cart')
  const existingCart: Product[] = existingCartString
    ? JSON.parse(existingCartString)
    : []

  const isProductInCart = existingCart.some(
    (cartProduct: { id: string }) => cartProduct.id === id
  )

  if (!isProductInCart) {
    const updatedCart = [...existingCart, product]

    window.localStorage.setItem('cart', JSON.stringify(updatedCart))
    notify('Producto agregado al carrito')
  } else {
    notify('Este producto ya está en el carrito')
  }
}
