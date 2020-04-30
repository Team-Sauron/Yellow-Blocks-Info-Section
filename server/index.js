// import
var express = require('express');
var db = require('./../database');
var fs = require('fs');
// init
var app = express();


//static

app.use(express.static(__dirname + '/../public'));
console.log(__dirname + '../public');

// middleware
app.use(express.json());



// endpoints

app.get('/api/info-section', (req, res) => {

  db.Product.find( (err, result) => {
    console.log('grabbing products');
    if (err) {
      console.log('error');
    }
    res.end(JSON.stringify(result));
  }).limit(1000)

});













// listen
var port = 3002;

app.listen(port, (err, result) => {
  if (err) {
    console.log('uh oh');
    throw err
  } else {
    console.log(`listening at http://localhost:${port}`);
  }
})
