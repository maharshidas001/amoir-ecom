import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  loading: true,
  error: null
};

// getAllCategories
const getAllCategories = createAsyncThunk('categories/getAllCategories', async () => {
  const response = await axios.get('https://fakestoreapi.in/api/products/category');
  return response.data;
});
// getSingleCategoryItem
const getSingleCategoryItem = createAsyncThunk('categories/getSingleCategoryItem', async (name) => {
  const respone = await axios.get(`https://fakestoreapi.in/api/products/category?type=${name}`);
  return respone.data;
});

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    // getAllCategories
    builder.addCase(getAllCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(getAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    }).addCase(getAllCategories.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    // getSingleCategoryItem
    builder.addCase(getSingleCategoryItem.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(getSingleCategoryItem.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    }).addCase(getSingleCategoryItem.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  }
});

export { getAllCategories, getSingleCategoryItem };
export default categorySlice.reducer;