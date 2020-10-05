import React, { useEffect, useReducer } from 'react';
import './App.css';
import { state, reducer } from './reducers';

import TodoList from './components/Todos/TodoList';

function App() {
  const [initialState, dispatch] = useReducer(reducer, state);

  useEffect(() => {
    dispatch({ type: 'GET_TODOS' });
  });
  
  const handleAddTodo = (e, todo) => {
    e.preventDefault();

    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  const toggleCompleted = todo => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: todo });
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <div className="App">
      <TodoList 
        todos={initialState.todos}
        handleAddTodo={handleAddTodo}
        toggleCompleted={toggleCompleted}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
