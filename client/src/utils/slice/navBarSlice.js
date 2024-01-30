import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "log",
};

export const navBarSlice = createSlice({
  name: "navBar",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = navBarSlice.actions;

export default navBarSlice.reducer;
