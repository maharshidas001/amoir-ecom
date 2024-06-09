import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import categorySlice from "./slices/categorySlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice
  }
});

export default store;