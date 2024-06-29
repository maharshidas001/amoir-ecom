import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import authSlice from './slices/authSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    auth: authSlice
  }
});

export default store;