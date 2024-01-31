import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postWorkout } from "../postWorkout";

const initialState = {
  workoutData: {},
  sendWorkoutThunk: {
    isLoading: false,
    error: null,
  },

  /*   {
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
      ...
    ],
  }, */
};

export const sendWorkout = createAsyncThunk(
  "newWorkout/sendWorkout",
  async (_, { getState }) => {
    const { workoutData } = getState().newWorkout;
    await postWorkout(workoutData);
  }
);

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
    updateExercise: (state, action) => {
      const { exerciseIndex, name } = action.payload;
      state.workoutData.exercises[exerciseIndex].name = name;
    },
    autofillRoutine: (state, action) => {
      const routine = action.payload; // Routine data object
      const data = {
        routine: routine.name,
        exercises: routine.data.map(({ exercise, sets }) => {
          const data = Array.from({ length: sets }, () => ({
            reps: null,
            weight: null,
            notes: null,
          }));
          return { name: exercise, data };
        }),
      };
      state.workoutData = data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendWorkout.pending, (state) => {
      state.sendWorkoutThunk.isLoading = true;
    });
    builder.addCase(sendWorkout.fulfilled, (state, action) => {
      state.sendWorkoutThunk.isLoading = false;
    });
    builder.addCase(sendWorkout.rejected, (state, action) => {
      state.sendWorkoutThunk.isLoading = false;
      state.sendWorkoutThunk.error = action.error.message;
    });
  },
});

export const {
  setWorkoutData,
  addExercise,
  addSet,
  updateWorkoutData,
  updateExercise,
  autofillRoutine,
} = newWorkoutSlice.actions;

export default newWorkoutSlice.reducer;
