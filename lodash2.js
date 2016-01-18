var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomfirstname = faker.name.firstName();
  var randomlastname = faker.name.lastName();
  var randomphone = faker.phone.phoneNumberFormat();
  var randomemail = faker.internet.email();
  var randomImage = faker.image.people();
  return {
    Nombre: randomfirstname,
    Apellido: randomlastname,
    Telefono: randomphone,
    Email: randomemail,
    Foto:randomImage
  }

}

app.get('/', function (req, res) {
  res.send('My New Server');
})

app.get('/friends', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/friends', function (req, res) {
  res.send('My friends');
})


app.listen(3000);
 