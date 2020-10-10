// import react and the libraries that you need
import React from 'react';
import "./TodoItems.css";

export default function Todoitems(props) {
    const { todo, index, completeTodo, removeTodo } = props;

    return (
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    )
}
