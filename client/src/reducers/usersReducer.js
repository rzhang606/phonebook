import userService from '../services/Users'
import { createHTTPErrAction } from './errorReducer'

/**
 * Reducer
 */
const usersReducer = (state = [], action) => {
    console.log('Action:', action);
    switch(action.type) {
        case 'U_SET':
            return action.data;
        default:
            return state;
    }
}

/**
 * Action Creator
 */

const set_action = (users) => {
    return {
        type: 'U_SET',
        data: users
    }
}

export const fetchUStore = () => {
    return (dispatch) => {
        userService.getUsers()
            .then(response => dispatch(set_action(response)))
            .catch( err => dispatch(createHTTPErrAction(err)));
    }
}

export default usersReducer;