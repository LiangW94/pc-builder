const mongoose = require('mongoose');
const { MONGODB_CONNECTION_STRING } = require('../config/db');

mongoose.connect(MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', function() {
  console.log('Mongoose connection opened');
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose connection disconnected');
});

module.exports = mongoose;
