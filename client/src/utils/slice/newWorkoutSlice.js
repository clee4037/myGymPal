import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workoutData: {},
  /*
  {
    workout_id: 3,
    routine: "Legs",
    date: "12/17/23",
    exercises: [
      {
        name: "Squats",
        data: [
          {
            reps: 6,
            weight: 175,
          },
        ],
      },
      {
        name: "Lunges",
        data: [
          {
            reps: 6,
            weight: 80,
          },
        ],
      },
    ],
  },
  */
};

export const newWorkoutSlice = createSlice({
  name: "newWorkout",
  initialState,
  reducers: {
    setWorkoutData: (state, action) => {
      state.workoutData = action.payload;
    },
    addExercise: (state) => {
      state.workoutData.exercises.push({
        name: null,
        data: [
          {
            reps: null,
            weight: null,
          },
        ],
      });
    },
  },
});

export const { addExercise, setWorkoutData } = newWorkoutSlice.actions;

export default newWorkoutSlice.reducer;
