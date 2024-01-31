import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import cartSlice from './features/cart/cartSlice'
import favoriteSlice from './features/favorites/favoriteSlice'
import orderSlice from './features/order/orderSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    favorites: favoriteSlice,
    orders: orderSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
