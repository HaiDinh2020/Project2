import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  userName: '',
  gender: 'nam',
  dateOfBirth: null,
  role: 'user',
  email: null,
  phoneNumber: null,
  address: '',
  avatar: 'http://localhost:5000/uploads/65c86ba3dcab01632f13ca26d1529f20'
}

export const TrangCaNhanSlice = createSlice({
  name: 'userinfor',
  initialState ,
  reducers: {
    
    defaultInfor: state => initialState,

    submitInfor: (state, action) => {
      state.id = action.payload.id
      state.userName = action.payload.userName
      state.gender = action.payload.gender
      state.dateOfBirth = action.payload.dateOfBirth
      state.role = action.payload.role
      state.email = action.payload.email
      state.phoneNumber = action.payload.phoneNumber
      state.address = action.payload.address
      state.avatar = 'http://localhost:5000/' + action.payload.avatar
    }    
  }
})

export const { submitInfor, defaultInfor } = TrangCaNhanSlice.actions

export default TrangCaNhanSlice.reducer