import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routines: [],
};

export const routineSlice = createSlice({
  name: "routine",
  initialState,
  reducers: {
    setRoutines: (state, action) => {
      state.routines = action.payload;
    },
  },
});

export const { setRoutines } = routineSlice.actions;

export default routineSlice.reducer;
