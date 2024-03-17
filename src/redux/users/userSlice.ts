import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('username')!)

export interface UsersState {
  name: string,
  username: string,
  password: string,
  option?: number
  status?: boolean
}

const initialState: UsersState = {
  name:  user.name || 'admin',
  username: user.username ||'admin',
  password: user.password || 'admin',
  status: user.status || false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UsersState>) => {
      const { name, username, password, status } = action.payload;
      state.name = name;
      state.username = username;
      state.password = password;
      state.status = status;
      localStorage.setItem('username', JSON.stringify(state))
      localStorage.setItem('status', 'true')
    },
    changeOption: (state, action: PayloadAction<number>) => {
      state.option = action.payload
      localStorage.setItem('option', JSON.stringify(action.payload))
    },
    loginUser: (state) => {
      state.status = true
      localStorage.setItem('status', 'true')
    },
  },
})

// Action creators are generated for each case reducer function
export const {addUser, changeOption, loginUser} = userSlice.actions

export default userSlice.reducer