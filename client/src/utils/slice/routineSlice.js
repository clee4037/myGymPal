import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routines: [],
  exercises: null,
};

export const routineSlice = createSlice({
  name: "routine",
  initialState,
  reducers: {
    setRoutines: (state, action) => {
      state.routines = action.payload;
    },
    setExercises: (state, action) => {
      state.exercises = action.payload;
    },
  },
});

export const { setRoutines, setExercises } = routineSlice.actions;

export default routineSlice.reducer;
