/**
 * Global Store
 */

import { combineReducers, createStore } from 'redux';
import todoReducer from './reducers/todoReducer'

// combining all reducers and putting a specific namespace
const allReducer = combineReducers({
    todos: todoReducer
});

const store = createStore(allReducer);

export default store;