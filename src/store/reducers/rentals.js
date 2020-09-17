


const rentals = (state = [], action) => {

    switch(action.type) {
        case 'FETCH_RENTALS': 
            return action.rentals;
        case 'CREATE_RENTALS':
            return [...state, action.newRental];
        default:
            return state;
    }
}

export default rentals;