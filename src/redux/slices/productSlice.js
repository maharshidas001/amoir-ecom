import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: true,
  error: null,
};

// getAllProducts
const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/products');
  return response.data;
});
// getSingleProduct
const getSingleProduct = createAsyncThunk('products/getSingleProduct', async (id) => {
  const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState,
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
      state.products = action.payload;
      state.loading = false;
    }).addCase(getSingleProduct.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  }
});

export { getAllProducts, getSingleProduct };
export default productSlice.reducer;