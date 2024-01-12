export interface Product {
  id: string
  images: Array<string>
  product_name: string
  rating: number
  description: string
  price: number
  prev_price?: number
  category: string
  stock: number
  characteristics: Array<string>
  size?: Array<string> | null
}
