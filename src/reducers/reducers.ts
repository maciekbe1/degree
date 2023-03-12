import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cart";
import drawerReducer from "./drawer";

const rootReducer = combineReducers({
  cart: cartReducer,
  drawer: drawerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
