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
      const product = action.payload;
      const existingItem = state.items.find((i) => i.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.total = fixedNumber(state.total + product.price);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const productIndex = state.items.findIndex(
        (product) => product.id === productId
      );
      if (productIndex !== -1) {
        const product = state.items[productIndex];
        state.items.splice(productIndex, 1);
        state.total = fixedNumber(
          state.total - product.price * product.quantity
        );
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.items.find((p) => p.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
        state.total = fixedNumber(state.total - product.price);
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.items.find((p) => p.id === productId);
      if (product) {
        product.quantity++;
        state.total = fixedNumber(state.total + product.price);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
