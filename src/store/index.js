

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rentals from './reducers/rentals';
import rental from './reducers/rental';

export function initStore() {
    const reducers = combineReducers({
        rentals,
        rental
    });
/*
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

    const addThunkToDispatch = (store) => {
        const { dispatch } = store;

        return function (action) {

            if (typeof action === "function") {
                return action(dispatch);
            }
            dispatch(action);
        }
    }*/

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
    /*
    store.dispatch = addPromiseToDispatch(store);
    store.dispatch = addThunkToDispatch(store);
    */

    return store; 
}
