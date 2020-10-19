
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

export const fetchRentalById = (rentalId) => (dispatch) => {
    dispatch({type: 'IS_FETCHING_RENTAL'});
    axios.get(`http://localhost:3000/api/v1/rentals/${rentalId}`)
    .then(res => {
        const rental =  res.data;
        dispatch({
            type: 'FETCH_RENTAL_BY_ID',
            rental
        })
    })
};

export const createRental = (newRental) =>{
    return {
        type: 'CREATE_RENTALS',
        newRental
    }
};