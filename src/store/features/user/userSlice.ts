import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User, UserApi } from '../../../typescript/interfaces/user.interface'

const initialState: UserApi = {
  user: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }
})

export const { setUserData } = userSlice.actions
export default userSlice.reducer
