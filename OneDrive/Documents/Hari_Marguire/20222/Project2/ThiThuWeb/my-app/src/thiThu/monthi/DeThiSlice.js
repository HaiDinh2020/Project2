import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getDeThi = createAsyncThunk(
  "dethi/getDeThi",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:5000/de-thi');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  dethi: [],
  loading: false,
  error: ''
}

const DeThiSlice = createSlice({
  name: 'dethi',
  initialState,
  reducers: {},
  extraReducers: {
    [getDeThi.pending]: (state) => {

      state.dethi = [];
      state.loading = true;
    },

    [getDeThi.rejected]: (state, action) => {
      state.error = action.payload.message
      state.loading = false;
    },

    [getDeThi.fulfilled]: (state, action) => {
      state.dethi = action.payload;
      state.loading = false;
    }
  }
})



export default DeThiSlice.reducer