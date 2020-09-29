const express = require("express");
const bodyParser = require("body-parser");
const config = require('./config/dev');

const mongoose = require('mongoose');

//Routes
const rentalRoutes = require('./routes/rentals');
//Models
const Rentals = require('./models/rental');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI, {
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
