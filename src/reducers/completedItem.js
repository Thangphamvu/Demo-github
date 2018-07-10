import * as types from '../constants/ActionTypes'

const completedItem = (state, action) => {
    switch (action.type) {
        case types.TOGGLE_STATUS:
            return !state;
        default:
            return !!state
    }

}

export default completedItem;