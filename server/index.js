const express = require("express");
const bodyParser = require("body-parser");

const rentalRoutes = require('./routes/rentals');

const app = express();

const PORT = process.env.PORT || 3001;

//Midlewares
app.use(bodyParser.json());

//API routes
app.use('/api/v1/rentals',rentalRoutes)

app.listen(PORT, () => {
  console.log("Server is listening on port: ", PORT);
});
