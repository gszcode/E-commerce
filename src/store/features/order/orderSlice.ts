import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Order } from '../../../typescript/interfaces/order.interface'

interface OrderState {
  orders: Array<Order>
}

const initialState: OrderState = {
  orders: []
}

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createProductOrder: (state, action: PayloadAction<Order>) => {
      state.orders = [...state.orders, action.payload]
    }
  }
})

export const { createProductOrder } = orderSlice.actions
export default orderSlice.reducer
