// import react and the libraries that you need
import React from 'react';

export default function Todoitems(props) {
    const { todo } = props;

    return (
        <div>
            {todo}
        </div>
    )
}
