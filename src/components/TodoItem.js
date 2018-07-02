import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const {item} = this.props;
        return (
            <li>
                <input className="toggle" type="checkbox" />
                <label>{item.name}</label>
                <button className="btn btn-danger delete">
                    <i className="fa fa-times-circle"></i>
                </button>
            </li>
        );
    }
}

export default TodoItem;
