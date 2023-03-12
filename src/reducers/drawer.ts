import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    isOpen: false,
  },
  reducers: {
    handleCartDrawer: (state, { payload }) => {
      state.isOpen = payload;
    },
  },
});
export const { handleCartDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
