import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    totalsCounter: counterReducer,
  },
});

export default store;
