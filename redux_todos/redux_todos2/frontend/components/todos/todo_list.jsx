import ToDoListItem from './todo_list_item';
import React from 'react';
// import { receiveTodo } from '../../actions/todo_actions';


const ToDoList = function({todos}) {
  return (
    <div>
      <h1>List</h1>
      <ul>
        {todos.map((todo) =>  <ToDoListItem key={todo.id} todo={todo}/>)}
      </ul>
    </div>
  );
};

export default ToDoList;
