import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import * as actions from '../actions';
class TodoList extends Component {
  showItems(items) {
    let result = null;
    if (items.length > 0) {
      result = items.map((item, index) => {
        return <TodoItem key={index} item={item} />
      });
    }
    return result;
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <input
          className="toggle-all" type="checkbox" checked={this.props.completedItem}
          onChange={this.props.toggleStatus}
        />
        <ul>
          {this.showItems(items)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    completedItem: state.completedItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleStatus() {
      console.log('Toggle')
      dispatch(actions.toggleStatus());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
