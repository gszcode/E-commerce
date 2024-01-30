export interface Order {
  id: string
  category: string
  product_name: string
  price: number
  quantity: number
  size?: string
  images: string[]
  stock: number
}
