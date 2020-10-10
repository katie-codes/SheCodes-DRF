import React from 'react';
import './App.css';
import Todoitems from  "./components/TodoItem/Todoitems";
import TodoForm from  "./components/TodoForm/TodoForm";


function App() {
  const[todos, setTodos] = React.useState([
    {
    text:"Learn about react", 
    isCompleted: false,
    },
    {
    text:"Lunch", 
    isCompleted: false,
    },
    {
    text: "Some thing else", 
    isCompleted: false,
    },
  ]);


  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };


  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  return (
    <div className="app">
    <div className="todo-list">
    <h1>to do list</h1>
    {todos.map((todo, index) => (
        <Todoitems 
        todo={todo} 
        key={index} 
        index={index} 
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        />
    ))}

    <TodoForm addTodo={addTodo}/>
    </div>
    </div>

  );
}

export default App;
