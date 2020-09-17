

import { combineReducers, createStore } from 'redux';
import rentals from './reducers/rentals';;


export function initStore() {
    const reducers = combineReducers({
        rentals,
        data1: (state = [], action) => {
            if (action.type === 'FETCH_DATA') {
                return ["1", "2", "3"]
            } else {
                return state;
            }
        }
    });

    return createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
