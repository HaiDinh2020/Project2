import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cauhoi: []
}

export const DeThiSlice = createSlice({
    name: 'cauhoi',
    initialState ,
    reducers: {
        showCauHoi: (state, action) => {
            state.cauhoi = action.payload
        }
    }
})

export const { showCauHoi } = DeThiSlice.actions

export default DeThiSlice.reducer;