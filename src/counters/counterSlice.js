import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    multiply: (state) => {
      state.count *= 5;
    },
    divide: (state) => {
      state.count /= 2;
    },
    reset: (state) => {
      state.count = 0;
    },
    addInput: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, multiply, divide, reset, addInput } =
  counterSlice.actions;

export default counterSlice.reducer;
