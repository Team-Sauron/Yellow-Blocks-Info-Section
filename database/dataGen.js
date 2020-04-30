var faker = require('faker');
var fs = require('fs');
var path = require('path');

var Product = require('./product');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/smego';

// var inserts = {succeeded: 0, failed: 0}

var genInsert = (number) => {

  if (number > 0) {
    var product = {
      ID: faker.random.number(),
      Brand: faker.lorem.word().toUpperCase(),
      Name: faker.lorem.sentence(),
      Price: faker.random.number() % 799,
      Rating: (faker.random.number() % 5),
      Stock: faker.random.number() % 1000,
      Related: ['space', 'music', 'fun', 'bananas', 'coding', 'dark humor'][faker.random.number() % 6],
      Ages: faker.random.number() % 16 + '+',
      Pieces: faker.random.number(),
      VIP_Points: faker.random.number(),
      Reviews: faker.random.number() % 999
      };

    var newProduct = new Product(product);
    newProduct.save(function (err, result) {
      if (err) {
        if (number % 1000 === 0) {
          console.log('error, ', number);
        }
        genInsert(number-1);
        // throw err;
      } else {
        if (number % 1000 === 0) {
          console.log('success, ', number);
        }
        genInsert(number-1);
      }
    })
  }


};

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true}, (err, result) => {
  if (err) {
    throw err;
  } else {
    console.log('connected to mongoose!');
    genInsert(10000);
  }
})
