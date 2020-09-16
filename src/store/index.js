
import { rentalData } from './data'
import { combineReducers, createStore } from 'redux';


export function initStore() {
    const reducers = combineReducers({
        rentals: () => {
            return rentalData
        },
        data1: () => {
            return ["1", "2", "3"]
        }
    });

    return createStore(reducers);
}
