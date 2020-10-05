import React from 'react';

const Todo = props => {
    const { 
        todo,
        toggleCompleted
    } = props;

    const toggleCompletedItem = () => {
        toggleCompleted(todo);
    };

    return(
        <div
            className='todo'
            onClick={toggleCompletedItem}
        >
            {todo.item}
        </div>
    );
};

export default Todo;