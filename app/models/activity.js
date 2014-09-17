var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  name: String,
  completed: {type: Boolean, default: false},
  todo_today: {type: Boolean, default: false},
  pomos_init_est: {type: Number, default: 1},
  pomos_curr_est: {type: Number, default: 1},
  pomos_required: {type: Number, default: 0},
  due_date: { type: Date, default: null }
});

module.exports = mongoose.model('Activity', ActivitySchema);
