

import { combineReducers, createStore } from 'redux';
import rentals from './reducers/rentals';
import rental from './reducers/rental';

export function initStore() {
    const reducers = combineReducers({
        rentals,
        rental
    });

    return createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
