import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

class TodoList extends Component {

  showItems(items) {
    let result = null;
    if(items.length > 0){
      result = items.map((item, index) => {
        return <TodoItem key={index} item = {item} />
      });
    }
    return result;
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <input className="toggle-all" type="checkbox" />
        <ul>
          {this.showItems(items)}
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
