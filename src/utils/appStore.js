import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default appStore;
