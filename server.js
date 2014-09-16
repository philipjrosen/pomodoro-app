var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./app/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use('/', router);

app.listen(port);
console.log('Listening on port ' + port + '...');
