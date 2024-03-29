import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWorkoutData } from "../getWorkoutData";

const initialState = {
  getWorkoutThunk: {
    workouts: [],
    history: {},
    isLoading: false,
    error: null,
  },
  view: "list",
};

export const fetchWorkouts = createAsyncThunk("log/fetchWorkouts", async () => {
  const response = await getWorkoutData();
  return response;
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchWorkouts.pending, (state) => {
      state.getWorkoutThunk.isLoading = true;
    });
    builder.addCase(fetchWorkouts.fulfilled, (state, action) => {
      state.getWorkoutThunk.isLoading = false;
      state.getWorkoutThunk.workouts = action.payload;

      const historyData = {};
      action.payload.forEach((workout) => {
        workout.exercises.forEach(({ name, data }) => {
          const { date } = workout;
          historyData[name] = [...(historyData[name] || []), { date, data }];
        });
      });
      state.getWorkoutThunk.history = historyData;
    });
    builder.addCase(fetchWorkouts.rejected, (state, action) => {
      state.getWorkoutThunk.isLoading = false;
      state.getWorkoutThunk.error = action.error.message;
    });
  },
});

export const { setWorkout, setView } = logSlice.actions;

export default logSlice.reducer;
