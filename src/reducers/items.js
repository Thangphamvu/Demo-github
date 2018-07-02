import * as types from './../constants/ActionTypes';

const sml = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

const generateID = () => {
    return sml() + '-' + sml() + sml()
    + '-' + sml() + sml() + sml()
    + '-' + sml() + sml() + sml() + sml()
    + '-' + sml() + sml() + sml() + sml() + sml()
    + '-' + sml() + sml() + sml() + sml() + sml() + sml()
    + '-' + sml() + sml() + sml() + sml() + sml()
    + '-' + sml() + sml() + sml() + sml()
    + '-' + sml() + sml() + sml()
    + '-' + sml() + sml() + '-' + sml()
}

let data = JSON.parse(localStorage.getItem('items'));
let initialState = data ? data : [];
let myReducer = (state=initialState, action) => {
    switch(action.types){
        case types.LIST_ALL:
            return state;
        case types.ADD_ITEM:
            let newItem = {
                id: generateID(),
                name: action.item.name,
                status : action.item.status
            };
            state.push(newItem);
            localStorage.setItem('items',state);
            return [...state];
        default : return state;
    }
};

export default myReducer;