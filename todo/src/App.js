import React, { useReducer } from 'react';
import './App.css';
import { state, reducer } from './reducers';

import TodoList from './components/Todos/TodoList';

function App() {
  const [initialState, dispatch] = useReducer(reducer, state);

  return (
    <div className="App">
      <TodoList todos={initialState.todos} />
    </div>
  );
}

export default App;
