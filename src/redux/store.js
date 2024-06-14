import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import categorySlice from "./slices/categorySlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
    cart: cartSlice
  }
});

export default store;