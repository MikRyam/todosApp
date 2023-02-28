import React from 'react';
import './App.css';
import Todos from "./components/Todos";
import AddTodoForm from "./components/AddTodoForm"
import BtnsGroup from "./components/BtnsGroup";

function App() {


  return (
    <div className="App">
      <AddTodoForm />
      <Todos />
      <BtnsGroup />
    </div>
  );
}

export default App;
