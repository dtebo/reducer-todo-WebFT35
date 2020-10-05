import React from 'react';
import TodoForm from '../TodoForm/TodoForm';

import Todo from './Todo';

const TodoList = props => {
    const { 
        todos,
        handleAddTodo,
        toggleCompleted
    } = props;

    return(
        <div className='todos'>
            {todos && todos.map((todo) => {
                return <Todo
                            key={todo.id} 
                            todo={todo}
                            toggleCompleted={toggleCompleted}
                        />
            })}
            <TodoForm handleAddTodo={handleAddTodo} />
        </div>
    );
};

export default TodoList;