var express = require('express');
var router = express.Router();
var User = require('../models/task');

router.post('/create', function(req, res, next) {
  ref.createTask(req.body, function(err, taskData) {

    if(err) return res.status(400).send(err);

    var taskObj = {};
    taskObj.name = req.body.name;
    taskObj.desc = req.body.desc;
    taskObj.date = req.body.date;

    Task.create(taskObj, function(err) {
      res.send(taskObj);
    });
  });
});
router.get('/', function(req, res, next) {
  console.log('working - index.js');

  res.render('index');
});

module.exports = router;
