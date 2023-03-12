import { createSlice } from "@reduxjs/toolkit";

import { CartItem } from "@/types";
import { fixedNumber } from "@/utils/fixedNumber";
export type CartState = {
  items: CartItem[];
  total: number;
};

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.total = fixedNumber(state.total + item.price);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.items.splice(itemIndex, 1);
        state.total = fixedNumber(state.total - item.price * item.quantity);
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((p) => p.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
        state.total = fixedNumber(state.total - item.price);
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((p) => p.id === itemId);
      if (item) {
        item.quantity++;
        state.total = fixedNumber(state.total + item.price);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
