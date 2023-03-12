import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openDrawer: (state, { payload }) => {
      state.isOpen = payload;
    },
  },
});
export const { openDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
