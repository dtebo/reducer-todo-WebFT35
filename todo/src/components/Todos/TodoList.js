import React from 'react';
import TodoForm from '../TodoForm/TodoForm';

import Todo from './Todo';

const TodoList = props => {
    const { 
        todos,
        handleAddTodo,
        toggleCompleted,
        clearCompleted
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
            <TodoForm
                handleAddTodo={handleAddTodo} 
                clearCompletedItems={clearCompleted}
            />
        </div>
    );
};

export default TodoList;