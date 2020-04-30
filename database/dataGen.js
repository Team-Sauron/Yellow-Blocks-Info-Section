var faker = require('faker');
var Product = require('./product');


var gen = () => {

  var newProduct = new Product({
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

  newProduct.save(function (err, result) {
    if (err) {
      console.log('oop');
    } else {
      console.log('submitted entry');
      console.log(result);
    }
  });

};





