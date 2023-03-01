import { RootState } from './store';

export const selectTodosState = (state: RootState) => state.todos;
export const selectTodos = (state: RootState) => state.todos.todos;
export const selectShowType = (state: RootState) => state.todos.show;
