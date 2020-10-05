import { useState } from 'react';

export const useForm = initialValues => {
    const [values, setTodo] = useState(initialValues);

    const handleChange = e => {
        setTodo(e.target.value);
    };

    return [values, handleChange];
};