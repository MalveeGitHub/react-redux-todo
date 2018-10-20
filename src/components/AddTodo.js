import React, { Component } from "react";
import { addTodo } from "../action/TodoAction";
import { connect } from "react-redux";

class AddTodo extends Component {
  state = {
    todo: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = this.state.todo;
    this.props.addTodo(data);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={e => this.setState({ todo: e.target.value })}
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter todo and press Enter"
        />
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
