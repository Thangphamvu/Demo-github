import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class NewTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false,
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false
    }
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddItem(this.state);
  }

  render() {
    return (
      <div className="todo">
        <form onSubmit={this.onSubmit} >
          <input
            className="new-todo" type="text" placeholder="What needs to be done?"
            name='name' value={this.state.name} onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddItem: (item) => {
      dispatch(actions.addItem(item));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
