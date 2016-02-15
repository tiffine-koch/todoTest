'use strict';

// var app = angular.module('taskApp', []);

var app = angular.module('taskApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {url: '/', templateUrl: '/partials/home.jade', controller: 'homeCtrl'});

    $urlRouterProvider.otherwise('/');
});

app.controller('homeCtrl', function($scope) {
  console.log('homeCtrl');
  $scope.tasks = [];

  $scope.addTask = function(task) {
    $scope.tasks.push($scope.newTask);
    $scope.newTask = {};
  }

});

app.controller('taskCtrl', function($scope, $moment) {
  Tasks.getAllTasks()
    .then
})


app.controller('timeCtrl', function($scope, $moment) {
  $scope.time = $moment("", "YYYYMMDD").dateNow();

})

app.service('Tasks', function($http) {
  var taskItem;

  this.getAllasks = function(taskList) {
    return $http.get('/');
  };
  this.addTask = function(taskObject) {
    return $http.post('/create', {name: task.name, desc: task.desc, date: task.date, completed: task.completed});
  };
});
