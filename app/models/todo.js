var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
  name: String,
  completed: Boolean,
  todo_today: Boolean,
  pomos_init_est: Number,
  pomos_curr_est: Number,
  pomos_required: Number,
  due_date: Date
});

module.exports = mongoose.model('ToDo', ToDoSchema);