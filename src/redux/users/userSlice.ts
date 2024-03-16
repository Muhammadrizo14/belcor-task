import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface UsersState {
  name: string,
  username: string,
  password: string,
  option?: number
  status?: boolean
}

const initialState: UsersState = {
  name: 'admin',
  username: 'admin',
  password: 'admin',
  status: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UsersState>) => {
      state.name = action.payload.name
      state.username = action.payload.username
      state.password = action.payload.password
      state.status = action.payload.status
    },
    changeOption: (state, action: PayloadAction<number>) => {
      state.option = action.payload
    },
    loginUser: (state) => {
      state.status = true
    },
  },
})

// Action creators are generated for each case reducer function
export const {addUser, changeOption, loginUser} = userSlice.actions

export default userSlice.reducer