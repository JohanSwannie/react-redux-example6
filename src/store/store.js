import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    totalCounter: counterReducer,
  },
});

export default store;
