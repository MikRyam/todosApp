import { selectTodosState } from '../selectors';
import { TodosState } from '../../features/todos/todosSlice';

describe('redux selectors', () => {
  const todos: TodosState = {
    todos: [{ id: '123', title: 'Redux', isCompleted: false }],
    show: 'all',
  };
  const result = selectTodosState({ todos });
  expect(result).toEqual(todos);
});
