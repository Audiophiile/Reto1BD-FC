var express = require('express');
var app = express();
var faker = require('faker');

app.get('/', function (req, res) {
  res.send('My New Server');
})

app.get('/posts', function (req, res) {
  var randomID = faker.random.number();
  var randomName = faker.name.findName();
  var randomContent = faker.hacker.phrase();
  var randomDate = faker.date.recent();
  var randomImage = faker.image.people();
  var usuario = {
    id: randomID,
    nombre: randomName,
    contenido: randomContent,
    fecha: randomDate,
    imagen:randomImage
  }
  res.json(usuario);
})

app.get('/posts', function (req, res) {
  res.send('posts');
})


app.listen(3000);

                      