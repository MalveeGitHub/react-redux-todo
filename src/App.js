import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./Store";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Route } from "react-router-dom";

class MainComp extends Component {
  render() {
    return (
      <React.Fragment>
        <AddTodo />
        <Todo />
      </React.Fragment>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <div className="container">
            <Route exact path="/" component={MainComp} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
