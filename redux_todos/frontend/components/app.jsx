import React from 'react';
import ToDoListContainer from './todos/todo_list_container';
import ToDoForm from './todos/todo_form';

const App = () => {
  return (
    <div>
      <h1>Super Awesome To Do App</h1>
      <ToDoForm />
      <ToDoListContainer />
    </div>
  );
};

export default App;
