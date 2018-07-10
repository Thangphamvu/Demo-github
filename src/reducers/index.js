import {combineReducers} from 'redux';
import items from './items';
import completedItem from './completedItem';

const myReducer = combineReducers({
    completedItem,
    items
});

export default myReducer;