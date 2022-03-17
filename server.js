// Require Dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const productsController = require('./controllers/products')

// Initialize Express
const app = express();

// configure settings
require('dotenv').config();
const { DATABASE_URL, PORT = 3001 } = process.env;

// MongoDB
mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on('connected', () => console.log('Connected to MongoDB'));
db.on('disconnected', () => console.log('Disconnected from MongoDB'));
db.on('error', () => console.log(`An Error Has Occurred with MongoDB: ${error.
message}`));

// Mount middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// Mount controllers/routes
app.use('/', productsController);

// App Listen
app.listen(PORT, () => console.log(`Express is listening on port:${PORT}`));
