import { configureStore } from '@reduxjs/toolkit'
import NavibarSlice from '../navigation/NavibarSlice'
import TrangCaNhanSlice from '../thiThu/trangcanhan/TrangCaNhanSlice'
import DeThiSlice from '../thiThu/monthi/DeThiSlice'
import BaiLamSlice from '../thiThu/monthi/baiLam/BaiLamSlice'

export default configureStore({
  reducer: {
    isLogin: NavibarSlice,
    userInfo: TrangCaNhanSlice,
    dethi: DeThiSlice,
    cauhoi: BaiLamSlice
  }
})