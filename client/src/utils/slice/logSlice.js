import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: [],
};

export const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    setWorkout: (state, action) => {
      state.workouts = [...state.workouts, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setWorkout } = logSlice.actions;

export default logSlice.reducer;
