import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos'; 

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "This is example",
        completed: true
      },
      {
        id: 2,
        title: "This is example 2",
        completed: false
      },
      {
        id: 3,
        title: "This is example 3",
        completed: false
      }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    //console.log(id);
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    //console.log(id);
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    console.log(this.state.todos);
  }

  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
        <Header />
        <Todos todos= { this.state.todos } markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
