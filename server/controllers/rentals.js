const rentals = [
  { _id: "DG2D4F3SS54", city: "New York", title: "Very nice place" },
  { _id: "G21G3S5354D", city: "Berlin", title: "Very nice place as well!" },
];

exports.getRentals = (req, res) => {
  return res.json(rentals);
};

exports.getRentalById = (req, res) => {
  const rental = rentals.find((r) => r._id === req.params.rentalId);

  return res.json(rental);
};

exports.createRental = (req, res) => {
  const rentalData = req.body;
  rentals.push(rentalData);

  return res.json({ message: `Rental with id: ${rentalData._id} was added` });
};

exports.deleteRental = (req, res) => {
  const rIndex = rentals.findIndex(
    (rental) => rental._id === req.params.rentalId
  );
  if (rIndex != -1) {
    const deletedRental = rentals.splice(rIndex, 1)[0];
    return res.json({
      message: `The rental with id of ${deletedRental._id} was deleted`,
    });
  } else {
    return res.json({
      message: `The rental with id of ${req.params.rentalId} was not found`,
    });
  }
};

exports.updateRental = (req, res) => {
  const { rentalId } = req.params;
  const rIndex = rentals.findIndex((rental) => rental._id === rentalId);
  if (rIndex != -1) {
    const newRental = req.body;
    if (newRental.city) {
      rentals[rIndex].city = newRental.city;
    }
    if (newRental.title) {
      rentals[rIndex].title = newRental.title;
    }
    return res.json({
      message: `The rental with id of ${rentalId} was updated`,
    });
  } else {
    return res.json({
      message: `The rental with id of ${rentalId} was not found`,
    });
  }
};
