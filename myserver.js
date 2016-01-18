//miserver.js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('My new server');
})

app.get('/posts', function (req, res) {
  res.send('Posts');
})

app.get('/friends', function (req, res) {
  res.send('My friends');
})

app.get('/profile', function (req, res) {
  res.send('My profile');
})


app.listen(3000);
                           