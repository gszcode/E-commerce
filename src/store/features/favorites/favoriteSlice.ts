import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from '../../../typescript/interfaces/product.interface'

interface FavoriteState {
  favorites: Array<Product>
}

const initialState: FavoriteState = {
  favorites: []
}

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setProductsToFavorites: (state, action: PayloadAction<Product>) => {
      state.favorites = [...state.favorites, action.payload]
    },
    removeProductFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (product) => product.id !== action.payload
      )
    }
  }
})

export const { setProductsToFavorites, removeProductFromFavorites } =
  favoriteSlice.actions
export default favoriteSlice.reducer
