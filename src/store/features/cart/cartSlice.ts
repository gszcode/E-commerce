import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from '../../../typescript/interfaces/product.interface'

interface CartState {
  cart: Array<Product>
}

const initialState: CartState = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProductsToCart: (state, action: PayloadAction<Product>) => {
      state.cart = [...state.cart, action.payload]
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((product) => product.id !== action.payload)
    },
    setEmptyCart: (state) => {
      state.cart = []
    }
  }
})

export const { setProductsToCart, removeProductFromCart, setEmptyCart } =
  cartSlice.actions
export default cartSlice.reducer
