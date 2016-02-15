'use strict';
var mongoose = require ('mongoose');

var taskSchema = new mongoose.Schema ({
  name: String,
  desc: String,
  date: Number
})

taskSchema.statics.create = function(taskObj, cb) {
	var task = new task(taskObj);
	task.save(cb);
}

taskSchema.statics.findAll = function(cb) {
	task.find({}, function(err, tasks) {
    	cb(err,tasks);
  	});
}

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;
