import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserSlice } from '../../../typescript/interfaces/user.interface'

const initialState: UserSlice = {
  message: '',
  data: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserData: (state, action: PayloadAction<UserSlice>) => {
      state.message = action.payload.message
      state.data = action.payload.data
    }
  }
})

export const { getUserData } = userSlice.actions
export default userSlice.reducer
