require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const formRoutes = require('./routes/formRoutes');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use(`${process.env.ROUTE_PATH}/`, userRoutes);
app.use(`${process.env.ROUTE_PATH}/`, formRoutes);

// Start the server

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
