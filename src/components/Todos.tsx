import React, {FC} from "react";
import {useAppSelector} from "../app/hooks";
import Todo from "./Todo";
import {RootState} from "../app/store";

const Todos: FC = () => {
  const todosTypes = {
    all: useAppSelector((state: RootState) => state.todos.todos),
    active: useAppSelector((state: RootState) => state.todos.todos.filter((todo) => !todo.isCompleted)),
    completed: useAppSelector((state: RootState) => state.todos.todos.filter((todo) => todo.isCompleted)),
  };
  const showType = useAppSelector((state: RootState) => state.todos.show);
  const todos = todosTypes[showType];

  return (
    <>
      <div>
        <span>{showType}</span>{todos.length}
      </div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
