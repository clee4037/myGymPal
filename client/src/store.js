import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./utils/slice/logSlice.js";
import routineReducer from "./utils/slice/routineSlice.js";
import newWorkoutReducer from "./utils/slice/newWorkoutSlice.js";
import navBarReducer from "./utils/slice/navBarSlice.js";

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    log: logReducer,
    routine: routineReducer,
    newWorkout: newWorkoutReducer,
  },
});
