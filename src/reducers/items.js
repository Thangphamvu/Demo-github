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

let data = JSON.parse(localStorage.getItem('items')) || [];
// let initialState = data ? data : [{ name: "abc", status: false }, { name: "def", status: false }];
const items = (state = data, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_ITEM:
            let newItem = {
                id: generateID(),
                name: action.item.name,
                status: action.item.status
            };
            const newState = [...state, newItem]
            localStorage.setItem('items', JSON.stringify(newState));
            return newState;
        default:
            return state;
    }
};

export default items;