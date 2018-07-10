import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TodoItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.item.id);
    }

    onDeleteItem = () => {
        this.props.onDeleteItem(this.props.item.id);
    }

    render() {
        const { item } = this.props;
        return (
            <li>
                <input className="toggle" type="checkbox" onChange={this.onUpdateStatus} checked={item.status} />
                <label>{item.name}</label>
                <button className="btn btn-danger delete" onClick={this.onDeleteItem} >
                    <i className="fa fa-times-circle"></i>
                </button>
            </li>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        item: ownProps.item
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        },
        onDeleteItem: (id) => {
            dispatch(actions.deleteItem(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
