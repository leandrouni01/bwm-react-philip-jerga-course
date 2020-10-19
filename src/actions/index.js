
import axios from 'axios';

export const fetchRentals = () => (dispatch) => 
    axios.get('http://localhost:3000/api/v1/rentals')
    .then(res => {
        const rentals =  res.data;
        dispatch({
            type: 'FETCH_RENTALS',
            rentals
        })
    });

export const fetchRentalById = (rentalId) => {
    const rental = {}

    return {
        type: 'FETCH_RENTAL_BY_ID',
        rental
    }
};

export const createRental = (newRental) =>{
    return {
        type: 'CREATE_RENTALS',
        newRental
    }
};