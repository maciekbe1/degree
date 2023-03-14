import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
