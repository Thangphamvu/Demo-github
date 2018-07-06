import React, { Component } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="h1">todos</h1>
        <div className="main">
          <NewTodo />
          <TodoList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
