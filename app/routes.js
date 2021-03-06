var express = require('express');
var router = express.Router();
var ToDo = require('./models/todo');

router.route('/todos')

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

router.route('/todos/:todo_id')

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

module.exports = router;
