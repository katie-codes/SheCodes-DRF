import React from 'react';
import './App.css';
import Todoitems from  "./components/Todoitems";
import TodoForm from  "./components/TodoForm";


function App() {
  const[todos, setTodos] = React.useState([
    "finish project", 
    "sleep", 
    "something else",
  ]);


  const addTodo = (text) => {
    const newTodos = [...todos, text]
    setTodos(newTodos)
  }

  return (
    <div>
    <h1>to do list</h1>
    {todos.map((todo, index) => (
        <Todoitems todo={todo} key={index}/>
    ))}

    <TodoForm addTodo={addTodo}/>
    </div>

  );
}

export default App;
