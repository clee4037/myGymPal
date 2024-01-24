import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./utils/slice/logSlice.js";

export const store = configureStore({
  reducer: {
    log: logReducer,
  },
});
