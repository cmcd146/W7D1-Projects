import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach((todo) => {
        newState[todo.id] = todo; 
      });
      return newState;
    case RECEIVE_TODO:
      const newState1 = merge({}, state);
      newState1[action.todo.id] = action.todo;
      return newState1;
    default:
      return state;
  }
};

export default todosReducer;

window.merge = merge;
