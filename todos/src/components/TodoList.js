import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
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
        );
    }
}

export default TodoList;
