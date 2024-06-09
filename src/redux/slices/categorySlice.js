import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  loading: true,
  error: null
};

// getAllCategories
const getAllCategories = createAsyncThunk('categories/getAllCategories', async () => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
  return response.data;
});
// getSingleCategory
const getSingleCategory = createAsyncThunk('categories/getSingleCategory', async (id) => {
  const respone = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}`);
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

    // getSingleCategory
    builder.addCase(getSingleCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(getSingleCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    }).addCase(getSingleCategory.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  }
});

export { getAllCategories, getSingleCategory };
export default categorySlice.reducer;