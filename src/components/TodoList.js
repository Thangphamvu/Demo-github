import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

class TodoList extends Component {
  render() {
    const { items } = this.props;
    let elmItem = items.map((item, index) => {
      return <TodoItem key={item.id} item={item} />
    });
    return (
      <div>
        <input className="toggle-all" type="checkbox" />
        <ul>
          {elmItem}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, null)(TodoList);
