const Rental = require('../models/rental');

exports.getRentals = (req, res) => {
  Rental.find({}, (err, foundRentals) => {
    if (err) {
      return res.status(422).send([{title: 'Rental Error', message: 'Cannot retrieve rental data'}])
    }

    return res.json(foundRentals);
  });
};

exports.getRentalById = (req, res) => {
  const {rentalId} = req.params;
  Rental.findById(rentalId, (err , foundRental) => {
    if (err) {
      return res.status(422).send([{title: 'Rental Error', message: 'Cannot retrieve rental data'}])
    }

    return res.json(foundRental);
  });
};

exports.createRental = (req, res) => {
  const rentalData = req.body;

  newRental.create(rentalData, (err, createdRental) => {
    if (err) {
      return res.status(422).send([{title: 'Rental Error', message: 'Cannot retrieve rental data'}])
    }

    return res.json({ message: `Rental with id: ${createdRental._id} was added` });
  });
};

