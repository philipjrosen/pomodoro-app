var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./app/routes');

var db = require('./config/db');

var port = process.env.PORT || 8080;

mongoose.connect(db.url);

mongoose.connection
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', function callback () {
    console.log("connected to database");
  });

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use('/', router);

app.listen(port);
console.log('Listening on port ' + port + '...');
