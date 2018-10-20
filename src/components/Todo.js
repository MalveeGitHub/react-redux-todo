import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodo } from "../action/TodoAction";
import { deleteTodo, updateTodo } from "../action/TodoAction";

class Todo extends Component {
  state = {
    edit: false,
    id: "",
    newInput: ""
  };
  componentDidMount() {
    this.props.getTodo();
  }

  deleteItem(id) {
    this.props.deleteTodo(id);
  }
  updateEdit = id => {
    this.setState({
      edit: !this.state.edit,
      id
    });
  };
  updateTodo = (id, e) => {
    e.preventDefault();
    const NewTodo = this.state.newInput;
    this.props.updateTodo(id, NewTodo);
    this.setState({ edit: false });
  };
  render() {
    const books = this.props.books;
    var edit = "";
    if (this.state.id !== "") {
      books.map(book => {
        if (book.id === this.state.id) {
          edit = (
            <li className="list-group-item">
              <form onSubmit={this.updateTodo.bind(this, book.id)}>
                <input
                  onChange={e => this.setState({ newInput: e.target.value })}
                  className="form-control"
                  defaultValue={book.title}
                />
              </form>
            </li>
          );
        }
      });
    }

    return (
      <div className="container text-center text-light">
        <h1 className="">Todo List (Made by M.Alvee)</h1>

        <ul class="list-group text-dark my-2">
          {this.state.edit == false
            ? books.map(book => (
                <li className="list-group-item">
                  {" "}
                  {book.title}{" "}
                  <a
                    onClick={this.updateEdit.bind(this, book.id)}
                    href="#!"
                    className="float-right ml-3"
                  >
                    <i class="fas fa-marker" />
                  </a>
                  <a
                    href="#!"
                    className="float-right"
                    onClick={this.deleteItem.bind(this, book.id)}
                  >
                    <i class="far fa-trash-alt" />
                  </a>{" "}
                </li>
              ))
            : edit}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.books
  };
};

export default connect(
  mapStateToProps,
  { getTodo, deleteTodo, updateTodo }
)(Todo);
