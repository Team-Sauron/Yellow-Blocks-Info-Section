// import
var express = require('express');

// init
var app = express();


//static

app.use(express.static(__dirname + '/../public'));
console.log(__dirname + '../public');

// middleware
app.use(express.json());


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