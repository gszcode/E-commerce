import { Product } from '../typescript/interfaces/product.interface'

export const TOTAL_PRICE = (cart: never[]) => {
  return cart
    .filter((item: Product) => item.quantity! > 0)
    .reduce(
      (acc: number, item: Product) => acc + item.price * item.quantity!,
      0
    )
}
