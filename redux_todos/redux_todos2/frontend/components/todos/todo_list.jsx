import React from 'react';
import {connect} from 'react-redux';
import ToDoListItem from './todo_list_item';
import {fetchTodos} from '../../actions/todo_actions';

// import { receiveTodo } from '../../actions/todo_actions';


// const ToDoList = function({todos}) {
  // return (
  //   <div>
  //     <h1>List</h1>
  //     <ul>
  //       {todos.map((todo) =>  <ToDoListItem key={todo.id} todo={todo}/>)}
  //     </ul>
  //   </div>
  // );
// };

class ToDoList extends React.Component {
  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    const { todos } = this.props;
    return (
      <div>
        <h1>List</h1>
        <ul>
          {todos.map((todo) =>  <ToDoListItem key={todo.id} todo={todo}/>)}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
