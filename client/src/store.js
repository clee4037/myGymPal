import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./utils/slice/logSlice.js";
import routineReducer from "./utils/slice/routineSlice.js";

export const store = configureStore({
  reducer: {
    // navBar: navBarReducer,
    log: logReducer,
    routine: routineReducer,
    // newWorkout: newWorkoutReducer,
  },
});
