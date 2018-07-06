import * as types from './../constants/ActionTypes';

export const listAll = () => {
    return {
        type : types.LIST_ALL,
    }
};

export const addItem = (item) => {
    return {
        type : types.ADD_ITEM,
        item
    }
};

export const updateStatus = (id) => {
    return {
        type : types.UPDATE_STATUS,
        id
    }
};

export const deleteItem = (id) => {
    return {
        type : types.DELETE_ITEM,
        id
    }
};

export const toggleStatus = () => {
    return {
        type : types.TOGGLE_STATUS,
    }
}