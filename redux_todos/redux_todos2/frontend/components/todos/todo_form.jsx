import React from 'react';
import { receiveTodo } from '../../actions/todo_actions';

class ToDoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  updateTitle(event) {
    this.setState({title: event.currentTarget.value});
  }

  updateBody(event) {
    this.setState({body: event.currentTarget.value});
  }

  handleInput(event) {
    event.preventDefault();
    const todo = Object.assign({}, this.state, {id: uniqueId()});
    this.props.createTodo({todo}).then(() =>
      this.setState({title: '', body: ''})
    );
  }

  render () {
    return (
      <div>
        <form >
          <label>Title:
            <input onChange={this.updateTitle} value={this.state.title} placeholder="Buy Milk"></input>
          </label>
          <br></br><br></br>
          <label>Body:
            <textarea onChange={this.updateBody} value={this.state.body}></textarea>
          </label>
          <br></br><br></br>
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
