import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://todo.mukulsingh.in/api/';

export interface TodoItem {
  id?: number;
  title: string;
  description: string;
}

export interface CountTodoState {
  todoList: TodoItem[];
  loading: boolean;
  itemLoading: boolean;
  error: any;
  todoItem: TodoItem | {};
}

const initialState: CountTodoState = {
  todoList: [],
  loading: false,
  itemLoading: false,
  error: '',
  todoItem: {},
};

export const getTodoList = createAsyncThunk('getTodoList', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const getTodoItem = createAsyncThunk(
  'getTodoItem',
  async (id: number) => {
    const response = await axios.get(url + `${id}/`);
    return response.data;
  },
);

export const createTodoItem = createAsyncThunk(
  'createTodoItem',
  async (data: TodoItem) => {
    const response = await axios.post(url, data);
    return response.data;
  },
);

export const removeTodoItem = createAsyncThunk(
  'removeTodoItem',
  async (id: number) => {
    await axios.delete(url + `${id}/`);
    return id;
  },
);

export const updateTodoItem = createAsyncThunk(
  'updateTodoItem',
  async ({id, data}: {id: number; data: TodoItem}) => {
    const response = await axios.put(url + `${id}/`, data);
    return response.data;
  },
);

export const countTodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTodoList.pending, state => {
      state.loading = true;
    });
    builder.addCase(getTodoList.fulfilled, (state, action) => {
      state.loading = false;
      state.todoList = action.payload;
    });
    builder.addCase(getTodoList.rejected, state => {
      state.loading = false;
      state.error = 'Failed to fetch todo list';
    });

    builder.addCase(getTodoItem.pending, state => {
      state.itemLoading = true;
    });
    builder.addCase(getTodoItem.fulfilled, (state, action) => {
      state.itemLoading = false;
      state.todoItem = action.payload;
    });
    builder.addCase(getTodoItem.rejected, state => {
      state.itemLoading = false;
      state.error = 'Failed to fetch todo item';
    });

    builder.addCase(createTodoItem.pending, state => {
      console.log('load');
      state.loading = true;
    });
    builder.addCase(createTodoItem.fulfilled, (state, action) => {
      state.loading = false;
      state.todoList = [...state.todoList, action.payload];
    });
    builder.addCase(createTodoItem.rejected, state => {
      state.loading = false;
      state.error = 'Failed to create todo item';
    });

    builder.addCase(removeTodoItem.pending, state => {
      state.loading = true;
    });
    builder.addCase(removeTodoItem.fulfilled, (state, action) => {
      state.loading = false;
      state.todoList = state.todoList.filter(
        item => item.id !== action.payload,
      );
    });
    builder.addCase(removeTodoItem.rejected, state => {
      state.loading = false;
      state.error = 'Failed to delete todo item';
    });

    builder.addCase(updateTodoItem.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateTodoItem.fulfilled, (state, action) => {
      state.loading = false;
      state.todoList = state.todoList.map(item => {
        if (item.id == action.payload.id) {
          return action.payload;
        }
        return item;
      });
    });
    builder.addCase(updateTodoItem.rejected, state => {
      state.loading = false;
      state.error = 'Failed to update todo item';
    });
  },
});

export default countTodoSlice.reducer;
