import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="h1">todos</h1>
        <div className="main">
          <div className="todo">
            <input className="new-todo" type="text" placeholder="What needs to be done?" />
          </div>
          <div>
            <input className="toggle-all" type="checkbox" />
            <ul>
              <li>
                <input className="toggle" type="checkbox" />
                <label>abc</label>
                <button className="btn btn-danger delete">
                  <i className="fa fa-times-circle"></i>
                </button>
              </li>
            </ul>
          </div>
          <div className="footer">
            <div className="left">
              count items left
            </div>
            <div className="center">
              some button
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
