import React from 'react';
import TodoForm from '../TodoForm/TodoForm';

import Todo from './Todo';

const TodoList = props => {
    const { 
        todos,
        handleAddTodo
    } = props;

    return(
        <div className='todos'>
            {todos && todos.map((todo) => {
                return <Todo
                            key={todo.id} 
                            todo={todo}
                        />
            })}
            <TodoForm handleAddTodo={handleAddTodo} />
        </div>
    );
};

export default TodoList;