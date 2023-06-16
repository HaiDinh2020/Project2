import { createSlice } from '@reduxjs/toolkit'

export const NavibarSlice = createSlice({
  name: 'isLogin',
  initialState: {
    checkLogin: false
  },
  reducers: {
    
    logout: state => {
      state.checkLogin = false
    },
    login: state => {
      state.checkLogin = true
    }    
  }
})

export const { logout, login } = NavibarSlice.actions

export default NavibarSlice.reducer