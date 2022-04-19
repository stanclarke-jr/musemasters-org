'use strict';

const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { MONGODB_URI } = process.env;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGODB_URI, options);
    console.log(`MongoDB connected: ${connect.connection.host}`.underline.cyan);
  } catch (error) {
    console.error(`Error: ${error.message}`.bold.red);
    process.exit();
  }
};

module.exports = connectDB;
