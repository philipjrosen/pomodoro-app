var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./app/routes');
var mongoose = require('mongoose');
var ToDo = require('./app/models/todo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/pomodoro');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("connected to database");
});

app.use('/', router);

app.listen(port);
console.log('Listening on port ' + port + '...');
