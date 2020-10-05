import React from 'react';

import { useForm } from '../../hooks/useForm';

const initialValues = {
    todo: ''
};

const TodoForm = props => {
    const [values, handleChange] = useForm(initialValues);

    const handleSubmit = e => {
        e.preventDefault();

        
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
            </form>
        </div>
    );
};

export default TodoForm;