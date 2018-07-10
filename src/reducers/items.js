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

const findIndex = (items, id) => {
    let result = -1;
    items.forEach((item, index) => {
        if (item.id === id) {
            result = index;
        }
    });
    return result;
}

let data = JSON.parse(localStorage.getItem('items')) || [];
//let initialState = data ? data : [{ name: "abc", status: false }, { name: "def", status: false }];
const items = (state = data, action) => {
    let id = action.id;
    let index = findIndex(state, id);
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
        case types.UPDATE_STATUS:
            state[index] = { ...state[index], ...{ status: !state[index].status } };
            localStorage.setItem('items', JSON.stringify(state));
            return [...state];
        case types.DELETE_ITEM:
            state.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(state));
            return [...state];
        // case types.TOGGLE_STATUS:
        case types.UPDATE_ITEMS_STATUS:
            return state.map(item => ({ ...item, ...{ status: action.status } }));
        default:
            return state;
    }
};

export default items;