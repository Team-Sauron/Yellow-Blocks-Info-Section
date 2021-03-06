const mongoose = require('mongoose');
const Product = require('./product');

const mongoDB = 'mongodb://127.0.0.1:27017/smego';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    throw err;
  } else {
    // eslint-disable-next-line no-console
    console.log('connected to mongoose!');
  }
});

const { connection } = mongoose;

// eslint-disable-next-line no-console
connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = { connection, Product };
