import { Product } from '../interfaces/product.interface'

export type OrderProduct = Omit<
  Product,
  'rating' | 'description' | 'prev_price' | 'characteristics'
>
