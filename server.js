var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Activity = require('./app/models/activity');

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

app.route('/activities')

  .post(function(req, res){
    var activity = new Activity({
      name: req.body.name
    });

    activity.save(function(err) {
      if(err) res.send(err);

      Activity.findById(activity, function (err, activity) {
        if (err) return handleError(err);
        res.json(activity);
      });

    });
  })

  .get(function(req, res) {
    Activity.find(function(err, activities) {
      if (err)
        res.send(err);

      res.json(activities);
    });
  });

app.route('/activities/:activity_id')

  .get(function(req, res) {
    Activity.findById(req.params.activity_id, function(err, activity) {
      if (err)
        res.send(err);
      res.json(activity);
    });
  })

  .put(function(req, res) {

    Activity.findById(req.params.activity_id, function(err, activity) {

      if (err)
        res.send(err);

      activity.name = req.body.name;

      activity.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Activity updated!' });
      });
    });
  })

  .delete(function(req, res) {
    // console.log("req.params:", req.params);
    Activity.remove({
      _id: req.params.activity_id
    }, function(err, activity) {
      if (err) res.send(err);

      res.json({ activityId: req.params.activity_id });
    });
  });

app.listen(port);
console.log('Listening on port ' + port + '...');

exports = module.exports = app;
