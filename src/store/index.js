
import { rentalData } from './data'
import { combineReducers, createStore } from 'redux';


export function initStore() {
    const reducers = combineReducers({
        rentals: (state = [], action) => {
            if(action.type === 'FETCH_RENTALS') {
                return rentalData;
            } else {
                return state;
            }
        },
        data1: (state = [], action) => {
            if (action.type === 'FETCH_DATA') {
                return ["1", "2", "3"]
            } else {
                return state;
            }
        }
    });

    return createStore(reducers);
}
