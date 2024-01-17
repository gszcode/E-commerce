import { messageToast } from '../utils/toastSuccess'
import { Product } from '../typescript/interfaces/product.interface'
import { allProducts } from './getAllProducts'

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
