import { useDispatch } from 'react-redux'
import { Product } from '../typescript/interfaces/product.interface'
import { messageToast } from '../utils/toastSuccess'
import { setProductsToCart } from '../store/features/cart/cartSlice'
import { allProducts } from '../utils/getAllProducts'

export const useAddProductCart = (cart: Product[]) => {
  const dispatch = useDispatch()
  const { notify, notifyError } = messageToast()

  const addToCart = (id: string) => {
    const productInCart = cart.find((prod: Product) => prod.id === id)

    if (productInCart) {
      notify('Este producto ya está en el carrito')
      return
    }

    const productFount = allProducts.find((prod) => prod.id === id)

    if (productFount && productFount?.stock > 0) {
      dispatch(setProductsToCart(productFount!))
      notify('Producto agregado al carrito')
    } else {
      notifyError('No hay stock de este producto')
    }
  }

  return addToCart
}
