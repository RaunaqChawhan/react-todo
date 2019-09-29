import React, { Component } from 'react';
import Todos from './components/Todos'; 

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "This is example",
        isCompleted: false
      },
      {
        id: 2,
        title: "This is example 2",
        isCompleted: false
      },
      {
        id: 3,
        title: "This is example 3",
        isCompleted: false
      }
    ]
  }
  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos= { this.state.todos }/>
      </div>
    );
  }
}

export default App;
