var faker = require('faker');
var Product = require('./product');
var fs = require('fs');
// var path = require('path');

var genAdd = (file) => {
  newProduct.save(function (err, result) {
    if (err) {
      console.log('oop');
    } else {
      console.log('submitted entry');
      console.log(result);
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

for (var i = 0; i < 5000; i++) {
  genSave();
}

fs.readdir('./database/genData', function(err, items) {

  for (var item of items) {
    fs.readFile('./database/genData/' + item, (err, entry) => {
      if (err) {
        throw err;
      } else {
        console.log(entry.toString());
      }
    });
  }

});
