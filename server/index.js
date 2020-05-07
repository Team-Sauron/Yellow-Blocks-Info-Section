// import
const express = require('express');
const path = require('path');
const db = require('../database');

// init

const app = express();

// static

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// app.use(express.static(`${__dirname}/../public/`));
app.use(express.static(`${__dirname}/../public`));

// middleware

app.use(express.json());

// endpoints

// app.get('/:id', (req, res) => {
//   const id = path.basename(req.url);
//   console.log(id);
//   res.end('nice');

// });

app.get('/api/info-section/', (req, res) => {
  db.Product.find((err, result) => {
    // eslint-disable-next-line no-console
    console.log('grabbing products');
    if (err) {
      // eslint-disable-next-line no-console
      console.log('error');
    }
    return res.end(JSON.stringify(result));
  }).limit(1000);
});

app.get('/api/info-section/:id', (req, res) => {
  const id = path.basename(req.url);
  db.Product.findOne({ ID: id }, (err, result) => {
    // eslint-disable-next-line no-console
    console.log('grabbing product');
    if (err) {
      // eslint-disable-next-line no-console
      console.log('error');
    }
    res.end(JSON.stringify(result));
  });
});

// listen
const port = 3002;

app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('uh oh');
    throw err;
  } else {
    // eslint-disable-next-line no-console
    console.log(`listening at http://localhost:${port}`);
  }
});
