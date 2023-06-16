import { configureStore } from '@reduxjs/toolkit'
import NavibarSlice from '../navigation/NavibarSlice'
import TrangCaNhanSlice from '../thiThu/trangcanhan/TrangCaNhanSlice'

export default configureStore({
  reducer: {
    isLogin: NavibarSlice,
    userInfo: TrangCaNhanSlice
  }
})