var faker = require('faker');
var Product = require('./product');
var fs = require('fs');
var path = require('path');

var genAdd = (object) => {
  console.log('in genadd')
  var newProduct = new Product(JSON.parse(object));
  newProduct.save(function (err, result) {
    if (err) {
      console.log('oop');
    } else {
      console.log('submitted entry');
    }
  });
};

var genSave = () => {
  var newProduct = new Product({
    ID: faker.random.number(),
    Brand: faker.lorem.word(),
    Name: faker.lorem.sentence(),
    Price: faker.random.number() % 799,
    Rating: (faker.random.number() % 5),
    Stock: faker.random.number() % 1000,
    Related: ['space', 'music', 'fun', 'bananas', 'coding', 'dark humor'][faker.random.number() % 6],
    Ages: faker.random.number() % 16 + '+',
    Pieces: faker.random.number(),
    VIP_Points: faker.random.number(),
    Reviews: faker.random.number() % 999
    });

    fs.writeFile(`./database/data/${newProduct.Name}json`, JSON.stringify(newProduct), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
};

// for (var i = 0; i < 5000; i++) {
  // genSave();
// }

// fs.readdir('./database/data', function(err, items) {

//   for (var item of items) {

//     fs.readFile('./database/data/' + item, (err, entry) => {
//       if (err) {
//         throw err;
//       } else {
//         genAdd(entry.toString());
//       }
//     });
//   }

// });
