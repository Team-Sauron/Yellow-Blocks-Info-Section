var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/smego';
var Product = require('./product');
var dataGen = require('./dataGen');

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true}, (err, result) => {
  if (err) {
    throw err;
  } else {
    console.log('connected to mongoose!');
  }
});

//Get the default connection
var connection = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = connection;
