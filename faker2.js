var express = require('express');
var app = express();
var faker = require('faker');

app.get('/', function (req, res) {
  res.send('My New Server');
})

app.get('/friends', function (req, res) {
  var randomfirstname = faker.name.firstName();
  var randomlastname = faker.name.lastName();
  var randomphone = faker.phone.phoneNumberFormat();
  var randomemail = faker.internet.email();
  var randomImage = faker.image.people();
  var usuario = {
    Nombre: randomfirstname,
    Apellido: randomlastname,
    Telefono: randomphone,
    Email: randomemail,
    Foto:randomImage
  }
  res.json(usuario);
})

app.get('/friends', function (req, res) {
  res.send('friends');
})


app.listen(3000);

                      