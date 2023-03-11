import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@/store";

export type CartState = {
  cart: number;
};

const initialState: CartState = {
  cart: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state: CartState) => {
      state.cart++;
    },
    decrement: (state: CartState) => {
      state.cart--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.cart += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export const selectCount = (state: RootState) => state.cart.cart;
export default cartSlice.reducer;
