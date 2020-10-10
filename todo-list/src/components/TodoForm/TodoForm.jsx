import React from 'react';

function TodoForm (props) {
    const { addTodo } = props;

    const [value, setValue] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            return;
        }
        addTodo(value);
        setValue("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="add todo" 
            value={value}
            onChange={(event) => setValue(event.target.value)}>
        </input>
        </form>
    )
}

export default TodoForm;