import {FC} from "react";
import {useAppDispatch} from "../app/hooks";
import {removeTodo} from "../features/todos/todosSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import Check from "./Check";

interface TodoProps {
  id: string,
  title: string,
  isCompleted: boolean,
}

const TodoItem: FC<TodoProps> = ({ id, title, isCompleted }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="py-1 px-6 flex justify-between items-center">
      <Check id={id} isCompleted={isCompleted}/>
      <div className={`py-2 pl-6 grow font-light text-lg ${isCompleted ? "line-through text-gray-400" : ""}`}>
        {title}
      </div>
      <button
        className="text-red-300 transition duration-150 ease-in-out hover:text-red-400 active:text-red-700"
        type="button"
        onClick={() => dispatch(removeTodo(id))}
      >
        <FaRegTrashAlt size={20}/>
      </button>
    </li>
  );
};

export default TodoItem;
