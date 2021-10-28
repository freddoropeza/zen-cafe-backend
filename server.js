// Require Dependencies
require('dotenv').config();
const { DATABASE_URL, PORT = 3001 } = process.env;

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Initialize Express
const app = express();

// MongoDB
const mongoose = require('mongoose');
mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on('connected', () => console.log('Connected to MongoDB'));
db.on('disconnected', () => console.log('Disconnected from MongoDB'));
db.on('error', () => console.log(`An Error Has Occurred with MongoDB: ${error.message}`));




// App Listen
app.listen(PORT, () => console.log(`Express is listening on port:${PORT}`));