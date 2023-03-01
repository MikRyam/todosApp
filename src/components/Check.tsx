import { FC } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { toggleComplete } from '../features/todos/todosSlice';
import { useAppDispatch } from '../app/hooks';

interface CheckProps {
  id: string;
  isCompleted: boolean;
}
const Check: FC<CheckProps> = ({ id, isCompleted }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      type="button"
      className="border rounded-3xl h-7 w-7 px-1 pt-1 pb-2"
      onClick={() => dispatch(toggleComplete(id))}
    >
      {isCompleted && <FcCheckmark size={20} />}
    </button>
  );
};

export default Check;
