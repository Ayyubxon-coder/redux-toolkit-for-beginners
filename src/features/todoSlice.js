import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  status: 'idle',
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Math.random() * 100,
        title: action.payload,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = 'success';
      state.todos.push(...action.payload.slice(0, 2));
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
