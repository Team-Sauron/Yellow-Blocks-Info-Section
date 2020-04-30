var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1:27017/newdb';


//Define a schema
var Schema = mongoose.Schema;

var Products = new Schema({
  ID: Number,
  Brand: String,
  Name: String,
  Price: Number,
  Rating: Number,
  Stock: Number,
  Related: String,
  Ages: String,
  Pieces: Number,
  VIP_Points: Number,
  Reviews: Number
});


mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;