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

    dispatch({ type: 'ADD_TODO ', payload: todo });
  };

  return (
    <div className="App">
      <TodoList 
        todos={initialState.todos}
        handleAddTodo={handleAddTodo}
      />
    </div>
  );
}

export default App;
