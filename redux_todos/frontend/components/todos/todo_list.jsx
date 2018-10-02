import ToDoListItem from './todo_list_item';
import React from 'react';

const ToDoList = function({todos}) {
  return (
    <ul>
      {todos.map((todo) =>  <ToDoListItem key={todo.id} todo={todo}/>)}
    </ul>
  );
};

export default ToDoList;
