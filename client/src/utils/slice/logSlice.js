import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
  view: "list",
};

export const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    setWorkout: (state, action) => {
      state.workouts = [...state.workouts, ...action.payload];
    },
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWorkout, setView } = logSlice.actions;

export default logSlice.reducer;
