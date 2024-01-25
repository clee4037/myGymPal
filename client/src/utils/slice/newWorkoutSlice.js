import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workoutData: {},
};

export const newWorkoutSlice = createSlice({
  name: "newWorkout",
  initialState,
  reducers: {
    setWorkoutData: (state, action) => {
      state.workoutData = action.payload;
    },
  },
});

export const { setExerciseComponents, setWorkoutData } =
  newWorkoutSlice.actions;

export default newWorkoutSlice.reducer;
