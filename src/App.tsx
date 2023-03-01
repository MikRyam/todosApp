import React from 'react';
// import './App.css';
import TodosList from './components/TodosList';
import AddTodoForm from './components/AddTodoForm';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="h-screen w-screen bg-neutral-100 flex flex-col justify-flex-start sm:p-2 sm:h-screen md:p-8 md:w-auto md:h-4/5">
      <h1 className="py-2 h-fit font-extralight text-5xl text-red-400 text-center flex-none">
        todos
      </h1>
      <div className="max-h-[91%] bg-white shadow-lg flex flex-col justify-between grow">
        <AddTodoForm />
        <TodosList />
        <Nav />
      </div>
    </div>
  );
};

export default App;
