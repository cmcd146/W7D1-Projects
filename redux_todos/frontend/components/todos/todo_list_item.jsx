import React from 'react';

const ToDoListItem = function({todo}){
  return (
      <li>{todo.formVal}</li>
  );
};

export default ToDoListItem;
