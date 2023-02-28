import {FC} from "react";
import {useAppDispatch} from "../app/hooks";
import {removeTodo, toggleComplete} from "../features/todos/todosSlice";

interface TodoProps {
  id: string,
  title: string,
  isCompleted: boolean,
}

const Todo: FC<TodoProps> = ({ id, title, isCompleted }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={isCompleted}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default Todo;
