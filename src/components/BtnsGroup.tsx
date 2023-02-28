import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {removeCompleted, showType, toggleShowedTodos} from "../features/todos/todosSlice";
import {RootState} from "../app/store";

const BtnsGroup: FC = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state: RootState) => state.todos.show);
  const activeTodos = useAppSelector((state: RootState) => state.todos.todos.filter((todo) => !todo.isCompleted))
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(toggleShowedTodos(e.currentTarget.id as showType))
  }
  return (

    <div>
      <div>{activeTodos.length} items left</div>
      <div>
        <button
          type="button"
          id="all"
          disabled={show === 'all'}
          onClick={(e) => handleClick(e)}
        >
          All
        </button>
        <button
          type="button"
          id="active"
          disabled={show === 'active'}
          onClick={(e) => handleClick(e)}
        >
          Active
        </button>
        <button
          type="button"
          id="completed"
          disabled={show === 'completed'}
          onClick={(e) => handleClick(e)}
        >
          Completed
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => dispatch(removeCompleted())}>
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default BtnsGroup;
