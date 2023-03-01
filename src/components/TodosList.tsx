import React, { FC } from 'react';
import { useAppSelector } from '../app/hooks';
import TodoItem from './TodoItem';
import { selectShowType, selectTodos } from '../app/selectors';

const TodosList: FC = () => {
  const todosTypes = {
    all: useAppSelector(selectTodos),
    active: useAppSelector(selectTodos).filter((todo) => !todo.isCompleted),
    completed: useAppSelector(selectTodos).filter((todo) => todo.isCompleted),
  };
  const showType = useAppSelector(selectShowType);
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
