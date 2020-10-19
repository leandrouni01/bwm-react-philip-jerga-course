import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import { capitalize } from 'helpers/functions';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id));
  }

  render() {
    const { rental, isFetching } = this.props;
    if (isFetching) return null;
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <div className="rental">
                <h2 className={`rental-type type-${rental.category}`}>{rental.shared ? 'Shared' : 'Whole'} {rental.category}</h2>
                <h1 className="rental-title">{rental.title}</h1>
                <h2 className="rental-city">{capitalize(rental.city)}</h2>
                <div className="rental-room-info">
                  <span>
                    <FontAwesomeIcon icon='building'/>{`${rental.numOfRooms} ${rental.numOfRooms > 1 ? 'bedrooms' : 'bedroom'}`}
                  </span>
                  <span>
                    <FontAwesomeIcon icon='user'/> {rental.numOfRooms + 4} guests
                  </span>
                  <span>
                    <FontAwesomeIcon icon='bed'/> {rental.numOfRooms + 2} beds
                  </span>
                </div>
                <p className="rental-description">{rental.description}</p>
                <hr />
                <div className="rental-assets">
                  <h3 className="title">Assets</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <span>
                        <FontAwesomeIcon icon='asterisk'/> Cooling
                      </span>
                      <span>
                        <FontAwesomeIcon icon='thermometer'/> Heating
                      </span>
                      <span>
                        <FontAwesomeIcon icon='location-arrow'/> Iron
                      </span>
                    </div>
                    <div className="col-md-6">
                      <span>
                        <FontAwesomeIcon icon='desktop'/> Working area
                      </span>
                      <span>
                        <FontAwesomeIcon icon='archive'/> Washing machine
                      </span>
                      <span>
                        <FontAwesomeIcon icon='soap'/> Dishwasher
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ( { rental } ) => ( { rental: rental.item, isFetching: rental.isFetching} );


const rentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(rentalDetailWithRouter);
