const faker = require('faker');
const mongoose = require('mongoose');
const Product = require('./product');

const mongoDB = 'mongodb://mongo:27017/smego';

// var inserts = {succeeded: 0, failed: 0}

const genInsert = (number) => {
  const titleCase = (title) => title
    .split(/ /g).map((word) => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`)
    .join(' ');

  if (number > 0) {
    // eslint-disable-next-line prefer-const
    let product = {
      // ID: faker.random.number(),
      ID: number,
      Brand: faker.lorem.word().toUpperCase(),
      Name: titleCase(faker.lorem.sentence()),
      Price: faker.commerce.price(),
      Rating: faker.random.number(10) * 0.5,
      Stock: faker.random.number(1000),
      Related: ['space', 'music', 'fun', 'bananas', 'coding', 'dark humor'][faker.random.number(6)],
      Ages: `${faker.random.number(16)}+`,
      Pieces: faker.random.number(),
      VIP_Points: faker.random.number(),
      Reviews: faker.random.number(999),
    };

    // eslint-disable-next-line prefer-const
    let newProduct = new Product(product);
    newProduct.save((err) => {
      if (err) {
        if (number % 1000 === 0) {
          // eslint-disable-next-line no-console
          console.log('error, ', number);
        }
        genInsert(number - 1);
        // throw err;
      } else {
        if (number % 1000 === 0) {
          // eslint-disable-next-line no-console
          console.log('success, ', number);
        }
        genInsert(number - 1);
      }
    });
  }
};

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    throw err;
  } else {
    // eslint-disable-next-line no-console
    console.log('connected to mongoose!');
    genInsert(10000);
  }
});
