import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: true,
  error: null,
  productPage: 1
};

// getAllProducts
const getAllProducts = createAsyncThunk('products/getAllProducts', async (page) => {
  const updatedPage = page || initialState.productPage;
  console.log(page);
  const response = await axios.get(`https://fakestoreapi.in/api/products?page=${updatedPage}&limit=20`);
  return response.data.products;
});
// getSingleProduct
const getSingleProduct = createAsyncThunk('products/getSingleProduct', async (id) => {
  const response = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPage: (state) => { state.page = Math.max(1, state.page - 1); }
  },
  extraReducers: (builder) => {
    // getAllProducts
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    }).addCase(getAllProducts.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    // getSingleProduct
    builder.addCase(getSingleProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(getSingleProduct.fulfilled, (state, action) => {
      state.products = [action.payload];
      state.loading = false;
    }).addCase(getSingleProduct.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  }
});

export { getAllProducts, getSingleProduct };
export const { setPage } = productSlice.actions;
export default productSlice.reducer;