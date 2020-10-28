import React from "react";
import { capitalize } from 'helpers/functions';
import RentalAssets from './RentalAssets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RentalInfo = ({rental}) => (
  <div className="details-section">
    <div className="row">
      <div className="col-md-8">
        <div className="rental">
          <h2 className={`rental-type type-${rental.category}`}>
            {rental.shared ? "Shared" : "Whole"} {rental.category}
          </h2>
          <h1 className="rental-title">{rental.title}</h1>
          <h2 className="rental-city">{capitalize(rental.city)}</h2>
          <div className="rental-room-info">
            <span>
              <FontAwesomeIcon icon="building" />
              {`${rental.numOfRooms} ${
                rental.numOfRooms > 1 ? "bedrooms" : "bedroom"
              }`}
            </span>
            <span>
              <FontAwesomeIcon icon="user" /> {rental.numOfRooms + 4} guests
            </span>
            <span>
              <FontAwesomeIcon icon="bed" /> {rental.numOfRooms + 2} beds
            </span>
          </div>
          <p className="rental-description">{rental.description}</p>
          <hr />
          <RentalAssets />
        </div>
      </div>
      <div className="col-md-4"> BOOKING</div>
    </div>
  </div>
);

export default RentalInfo;
