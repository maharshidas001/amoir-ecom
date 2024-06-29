import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        state.status = true;
      }
    },
    login: (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        state.status = true;
      }
    },
    logout: (state) => {
      state.user = null;
      state.status = false;
    },
  }
});

export const { signUp, login, logout } = authSlice.actions;
export default authSlice.reducer;