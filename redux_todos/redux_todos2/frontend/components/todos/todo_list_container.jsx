import ToDoList from './todo_list';
import { connect } from 'react-redux';
import {fetchTodos} from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (todo) => ({
  fetchTodos: (todo) => store.dispatch(fetchTodos(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ToDoList);
