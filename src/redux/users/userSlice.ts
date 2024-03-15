import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface UsersState {
  name: string,
  username: string,
  password: string,
  option?: number
}

const initialState: UsersState = {
  name: '',
  username: '',
  password: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UsersState>) => {
      state.name = action.payload.name
      state.username = action.payload.username
      state.password = action.payload.password
    },
    changeOption: (state, action: PayloadAction<number>) => {
      state.option = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {addUser, changeOption} = userSlice.actions

export default userSlice.reducer