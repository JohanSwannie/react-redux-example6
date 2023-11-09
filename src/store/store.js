import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counters/counterSlice";

const store = configureStore({
  reducer: {
    totalsCounter: counterReducer,
  },
});

export default store;
