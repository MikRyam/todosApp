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
    <label>
      <input
        placeholder='What needs to be done?'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Add todo</button>
    </label>
  );
};

export default AddTodoForm;
