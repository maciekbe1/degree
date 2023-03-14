import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cart";
import drawerReducer from "./drawer";
import productReducer from "./product";

const rootReducer = combineReducers({
  cart: cartReducer,
  drawer: drawerReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
