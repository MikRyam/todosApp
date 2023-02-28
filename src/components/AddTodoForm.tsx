import React, {FC, useEffect, useRef, useState} from "react";
import {useAppDispatch} from "../app/hooks";
import {addTodo} from "../features/todos/todosSlice";

const AddTodoForm: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, []);

  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText('');
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex justify-between flex-none h-fit">
      <input
        className="w-full py-3 pl-12 pr-1 font-light text-xl text-slate-800 focus:outline-none placeholder-slate-400 placeholder:font-light placeholder:text-md placeholder:italic"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        ref={inputRef}
      />
      <button
        className="py-1 px-3 whitespace-nowrap border border-red-300 text-red-300 leading-normal transition duration-150 ease-in-out hover:border-red-400 hover:bg-neutral-400 hover:bg-opacity-10 hover:text-red-400  active:border-red-600 active:text-red-600"
        type="button"
        onClick={handleSubmit}>+ Add</button>
    </div>
  );
};

export default AddTodoForm;
