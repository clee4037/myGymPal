import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getExercises } from "../getExercises";
import { getRoutines } from "../getRoutines";

const initialState = {
  routines: [],
  getExercisesThunk: {
    exercises: [],
    isLoading: false,
    error: null,
  },
  getRoutinesThunk: {
    routines: [],
    isLoading: false,
    error: null,
  },
};

export const fetchExercises = createAsyncThunk(
  "routine/fetchExercises",
  async () => {
    const response = await getExercises();
    return response;
  }
);

export const fetchRoutines = createAsyncThunk(
  "routine/fetchRoutines",
  async () => {
    const response = await getRoutines();
    return response;
  }
);

export const routineSlice = createSlice({
  name: "routine",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExercises.pending, (state) => {
      state.getExercisesThunk.isLoading = true;
    });
    builder.addCase(fetchExercises.fulfilled, (state, action) => {
      state.getExercisesThunk.isLoading = false;
      state.getExercisesThunk.exercises = action.payload;
    });
    builder.addCase(fetchExercises.rejected, (state, action) => {
      state.getExercisesThunk.isLoading = false;
      state.getExercisesThunk.error = action.error.message;
    });
    builder.addCase(fetchRoutines.pending, (state) => {
      state.getRoutinesThunk.isLoading = true;
    });
    builder.addCase(fetchRoutines.fulfilled, (state, action) => {
      state.getRoutinesThunk.isLoading = false;
      state.getRoutinesThunk.routines = action.payload;
    });
    builder.addCase(fetchRoutines.rejected, (state, action) => {
      state.getRoutinesThunk.isLoading = false;
      state.getRoutinesThunk.error = action.error.message;
    });
  },
});

export default routineSlice.reducer;
