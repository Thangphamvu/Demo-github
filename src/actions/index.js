import * as types from './../constants/ActionTypes';
import { store } from '../index';

export const listAll = () => {
    return {
        type: types.LIST_ALL,
    }
};

export const addItem = (item) => {
    return {
        type: types.ADD_ITEM,
        item
    }
};

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id
    }
};

export const deleteItem = (id) => {
    return {
        type: types.DELETE_ITEM,
        id
    }
};

export const toggleStatus = () => {
    store.dispatch(updateItemsStatus(!store.getState().completedItem));
    return {
        type: types.TOGGLE_STATUS,
    }
}

export const updateItemsStatus = (status) => {
    return {
        type: types.UPDATE_ITEMS_STATUS,
        status: status
    }
}

export const filterStatus = (filter) => {
    return {
        type: types.FILTER_STATUS,
        filter,
    }
}