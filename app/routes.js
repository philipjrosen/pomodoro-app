var express = require('express');
var router = express.Router();
var ToDo = require('./models/todo');

router.get('/', function(req, res) {
  res.json({ message: 'basic api working' }); 
});

router.route('/todo')

  .post(function(req, res){
    var todo = new ToDo();
    todo.name = req.body.name;

    todo.save(function(err) {
      if(err){
        res.send(err);
      }

      res.json({message: "ToDo Created"});

    });
  });

module.exports = router;

