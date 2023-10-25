import {configureStore} from '@reduxjs/toolkit';
import countTodoReducer from '../feature/countTodoSlice';

export const store = configureStore({
  reducer: {
    counter: countTodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
