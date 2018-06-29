import React, { Component } from 'react';

class NewTodo extends Component {
    render() {
        return (
            <div className="todo">
                <input className="new-todo" type="text" placeholder="What needs to be done?" />
            </div>
        );
    }
}

export default NewTodo;
