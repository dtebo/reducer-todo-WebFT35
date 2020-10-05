import React from 'react';

import { useForm } from '../../hooks/useForm';

const initialValues = {
    todo: ''
};

const TodoForm = props => {
    const { handleAddTodo } = props;

    const [values, handleChange] = useForm(initialValues);

    const handleSubmit = e => {
        handleAddTodo(e, values.todo);
    };

    return(
        <div className='todo-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='todo'>
                    <input
                        type='text'
                        name='todo'
                        id='todo'
                        value={values.todo}
                        onChange={handleChange}
                    />
                </label>
                <button>Add Item</button>
                <button
                    onClick={() => console.log('Clear Completed: DT: ', 'Will clear completed todos...')}
                >
                    Clear Completed
                </button>
            </form>
        </div>
    );
};

export default TodoForm;