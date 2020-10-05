import React from 'react';
import TodoForm from '../TodoForm/TodoForm';

import Todo from './Todo';

const TodoList = props => {
    const { todos } = props;

    return(
        <div className='todos'>
            {todos && todos.map((todo) => {
                return <Todo todo={todo} />
            })}
            <TodoForm />
        </div>
    );
};

export default TodoList;