var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var ToDo = require('./app/models/todo');


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

var router = express.Router();

//serve static files
router.use(express.static(__dirname + '/public'));

//handle http requests from front end
app.use('/', router);

app.route('/todos')

  .post(function(req, res){
    var todo = new ToDo();
    todo.name = req.body.name;

    todo.save(function(err) {
      if(err){
        res.send(err);
      }

      res.json({message: "ToDo Created"});

    });
  })
  .get(function(req, res) {
    ToDo.find(function(err, todos) {
      if (err)
        res.send(err);

      res.json(todos);
    });
  });

app.route('/todos/:todo_id')

  .get(function(req, res) {
    ToDo.findById(req.params.todo_id, function(err, todo) {
      if (err)
        res.send(err);
      res.json(todo);
    });
  })
  .put(function(req, res) {

    ToDo.findById(req.params.todo_id, function(err, todo) {

      if (err)
        res.send(err);

      todo.name = req.body.name;

      todo.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'ToDo updated!' });
      });
    });
  })
  .delete(function(req, res) {
    ToDo.remove({
      _id: req.params.todo_id
    }, function(err, todo) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

app.listen(port);
console.log('Listening on port ' + port + '...');
