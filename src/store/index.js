

import { combineReducers, createStore } from 'redux';
import rentals from './reducers/rentals';
import rental from './reducers/rental';

export function initStore() {
    const reducers = combineReducers({
        rentals,
        rental
    });

    const addPromiseToDispatch = (store) => {
        const { dispatch } = store;


        return function (action) {

            if (action.then && typeof action.then === "function") {
                return action.then( (action) => {
                    dispatch(action);
                })
            }
            dispatch(action);
        }
    }

    const reduxExtention = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const store = createStore(reducers, reduxExtention);

    store.dispatch = addPromiseToDispatch(store);

    return store; 
}
