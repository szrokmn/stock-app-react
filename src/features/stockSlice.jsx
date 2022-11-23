import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: { 
    purchases: null,
    sales: null,
    products: null,
    brands: null,
    firms: null,
    categories: null,   
    loading: false,
    error: false,   
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, {payload: { data, url }}) => {
      state.loading = false;
      state[url] = data;
    },    
    fetchFail: (state) => {             
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
