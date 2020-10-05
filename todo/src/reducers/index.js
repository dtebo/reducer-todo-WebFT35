import React, { useReducer } from 'react';

const initialState = {
    todos: [
        {
            id: 1,
            item: 'Wash Dishes',
            completed: false
        },
        {
            id: 2,
            item: 'Sweep the floor',
            completed: false
        },
        {
            id: 3,
            item: 'Get groceries',
            completed: false
        }
    ]
};

export const reducer = (initialState, action) => {
    switch(action){
        default:
            return initialState;
    }
};