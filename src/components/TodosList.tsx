import React, { FC } from 'react';
import { useAppSelector } from '../app/hooks';
import TodoItem from './TodoItem';
import { RootState } from '../app/store';

const TodosList: FC = () => {
  const todosTypes = {
    all: useAppSelector((state: RootState) => state.todos.todos),
    active: useAppSelector((state: RootState) =>
      state.todos.todos.filter((todo) => !todo.isCompleted),
    ),
    completed: useAppSelector((state: RootState) =>
      state.todos.todos.filter((todo) => todo.isCompleted),
    ),
  };
  const showType = useAppSelector((state: RootState) => state.todos.show);
  const todos = todosTypes[showType];

  return (
    <ul className="flex-1 border-t border-b divide-y overflow-y-auto">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodosList;
