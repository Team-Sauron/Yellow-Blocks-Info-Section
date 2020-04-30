var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Define a schema
var productSchema = new Schema({
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


module.exports = mongoose.model('product', productSchema);
