require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user.Routes');
const userdataRoutes = require('./routes/userdata.Routes')
const formRoutes = require('./routes/form.Routes');
const paymentRoutes = require('./routes/payment.Routes');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(`${process.env.ROUTE_PATH}/`, userRoutes);
app.use(`${process.env.ROUTE_PATH}/`, formRoutes);
app.use(`${process.env.ROUTE_PATH}/`, paymentRoutes);
app.use(`${process.env.ROUTE_PATH}/`, userdataRoutes);

// Start the server

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
