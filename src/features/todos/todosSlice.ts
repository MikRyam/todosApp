import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { ITodo } from '../../interfaces/todoInterface';

export type showType = 'all' | 'active' | 'completed';

export interface TodosState {
  todos: ITodo[];
  show: showType;
}

const initialState: TodosState = {
  todos: [],
  show: 'all',
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: uuid().slice(0, 8),
        title: action.payload,
        isCompleted: false,
      });
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload,
      );
      if (toggledTodo) {
        toggledTodo.isCompleted = !toggledTodo.isCompleted;
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    removeCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },
    toggleShowedTodos(state, action: PayloadAction<showType>) {
      state.show = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  removeTodo,
  toggleShowedTodos,
  removeCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;
