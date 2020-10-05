import React from 'react';

export const state = {
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
    switch(action.type){
        case "ADD_TODO":
            return {
                todos: [
                    ...initialState.todos,
                    {
                        id: Date.now(),
                        item: action.payload,
                        completed: false
                    }
                ]
            };
        case "TOGGLE_COMPLETED":
            return {
                todos: initialState.todos.map(todo => {
                    if(todo.id === action.payload.id){
                        return {
                            id: action.payload.id,
                            item: action.payload.item,
                            completed: true
                        };
                    }

                    return todo;
                })
            };
        case "GET_TODOS":
            return initialState;
        default:
            return initialState;
    }
};