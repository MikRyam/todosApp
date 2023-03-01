import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  removeCompleted,
  showType,
  toggleShowedTodos,
} from '../features/todos/todosSlice';
import { RootState } from '../app/store';

const Nav: FC = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state: RootState) => state.todos.show);
  const activeTodos = useAppSelector((state: RootState) =>
    state.todos.todos.filter((todo) => !todo.isCompleted),
  );
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(toggleShowedTodos(e.currentTarget.id as showType));
  };
  return (
    <nav className="pt-2 pb-4 sm:py-2 px-2 text-sm font-light text-gray-500 flex-none h-fit">
      <ul className="flex gap-6 justify-around items-center flex-wrap sm:justify-between ">
        <li className="px-1">{activeTodos.length} items left</li>
        <li className="order-last flex space-x-1 justify-between min-[438px]:order-none">
          <button
            className="px-2 rounded-sm disabled:border-2 hover:text-gray-700 active:text-gray-900"
            type="button"
            id="all"
            disabled={show === 'all'}
            onClick={(e) => handleClick(e)}
          >
            All
          </button>
          <button
            className="px-2 disabled:border-2 rounded-sm hover:text-gray-700 active:text-gray-900"
            type="button"
            id="active"
            disabled={show === 'active'}
            onClick={(e) => handleClick(e)}
          >
            Active
          </button>
          <button
            className="px-2 disabled:border-2 rounded-sm hover:text-gray-700 active:text-gray-900"
            type="button"
            id="completed"
            disabled={show === 'completed'}
            onClick={(e) => handleClick(e)}
          >
            Completed
          </button>
        </li>
        <li>
          <button
            className="p-1 hover:text-gray-700 active:text-gray-900"
            type="button"
            onClick={() => dispatch(removeCompleted())}
          >
            Clear completed
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
