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
            notes: null,
          },
        ],
      });
    },
    addSet: (state, action) => {
      state.workoutData.exercises[action.payload].data.push({
        reps: null,
        weight: null,
        notes: null,
      });
    },
    updateWorkoutData: (state, action) => {
      // REFACTOR TO USE CREATEACTION || https://redux-toolkit.js.org/api/createAction
      const { exerciseIndex, setIndex, col, newData } = action.payload;
      state.workoutData.exercises[exerciseIndex].data[setIndex][col] = newData;
    },
  },
});

export const { setWorkoutData, addExercise, addSet, updateWorkoutData } =
  newWorkoutSlice.actions;

export default newWorkoutSlice.reducer;
