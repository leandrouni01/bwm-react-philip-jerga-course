const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require('mongoose');

const rentalRoutes = require('./routes/rentals');

const app = express();
const PORT = process.env.PORT || 3001;
const DBURI = 'mongodb+srv://test:testtest@bwm-new.wlkrb.mongodb.net/bwm-new-dev?retryWrites=true&w=majority';

mongoose.connect(DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, () => {
  console.log("Connected to DB");
});

//Midlewares
app.use(bodyParser.json());

//API routes
app.use('/api/v1/rentals',rentalRoutes)

app.listen(PORT, () => {
  console.log("Server is listening on port: ", PORT);
});
