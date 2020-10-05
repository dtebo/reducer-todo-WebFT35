import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    const { todos } = props;

    return(
        <div className='todos'>
            {todos.map((todo) => {
                return <Todo todo={todo} />
            })}
        </div>
    );
};

export default TodoList;