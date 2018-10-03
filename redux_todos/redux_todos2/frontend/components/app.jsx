import React from 'react';
import ToDoListContainer from './todos/todo_list_container';
import { createTodo } from '../actions/todo_actions';

const App = () => {
  return (
    <div>
      <h1>Super Awesome To Do App</h1>

      <ToDoListContainer />
    </div>
  );
};

export default App;
