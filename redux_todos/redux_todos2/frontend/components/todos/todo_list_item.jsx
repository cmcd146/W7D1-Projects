import React from 'react';

const ToDoListItem = function({todo}){
  return (
      <li>{todo.title}</li>
  );
};

export default ToDoListItem;
