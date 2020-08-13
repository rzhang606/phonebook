import  {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import personReducer from './personReducer';
import errorReducer from './errorReducer';
import notifReducer from './notifReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
    people: personReducer,
    error: errorReducer,
    notification: notifReducer,
    users: usersReducer
});
const personStore = createStore(
    reducers,
    applyMiddleware(thunk)
);
console.log('State:', personStore.getState());

export default personStore;