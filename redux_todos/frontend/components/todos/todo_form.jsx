import React from 'react';
import { receiveTodo } from '../../actions/todo_actions';

class ToDoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVal: ''
    };
    this.updateVal = this.updateVal.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  updateVal(event) {
    this.setState({formVal: event.currentTarget.value});
  }

  handleInput(event) {
    event.preventDefault();
    const todo = Object.assign({}, this.state, {id: uniqueId()});

    store.dispatch(receiveTodo(todo));
      this.setState({formVal: ''});
  }

  render () {
    return (
      <div>
        <form >
          <input onChange={this.updateVal} value={this.state.formVal}></input>
          <input onClick={this.handleInput} type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

function uniqueId() {
  return new Date().getTime();
}

export default ToDoForm;
