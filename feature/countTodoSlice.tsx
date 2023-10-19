import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CountTodoState {
  count: number;
}

const initialState: CountTodoState = {
  count: 0,
};

export const countTodoSlice = createSlice({
  name: 'todoCounter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const {increment, decrement, setAmount} = countTodoSlice.actions;
export default countTodoSlice.reducer;
