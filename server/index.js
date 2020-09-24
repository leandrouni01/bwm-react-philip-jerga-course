const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

const rentals = [
  { _id: "DG2D4F3SS54", city: "New York", title: "Very nice place" },
  { _id: "G21G3S5354D", city: "Berlin", title: "Very nice place as well!" }
];

app.get('/api/v1/rentals', (req, res) => {
    return res.json(rentals);
});

app.get('/api/v1/rentals/:rentalId', (req, res) => {
    const rental = rentals.find( r => r._id === req.params.rentalId);

    return res.json(rental);
});

app.listen(PORT, () => {
  console.log("Server is listening on port: ", PORT);
});
