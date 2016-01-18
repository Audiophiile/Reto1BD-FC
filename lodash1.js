var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomID = faker.random.number();
  var randomName = faker.name.findName();
  var randomContent = faker.hacker.phrase();
  var randomDate = faker.date.recent();
  var randomImage = faker.image.people();
  return {
    id: randomID,
    nombre: randomName,
    contenido: randomContent,
    fecha: randomDate,
    imagen:randomImage
  }

}

app.get('/', function (req, res) {
  res.send('My New Server');
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/posts', function (req, res) {
  res.send('posts');
})


app.listen(3000);
 