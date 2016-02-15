'use strict';

var app = angular.module('taskApp');
// var app = angular.module('someApp', ['ui.router']);
//
// app.config(function($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state('home', {url: '/', templateUrl: '/partials/home/home.html', controller: 'homeCtrl'});
//
//     $urlRouterProvider.otherwise('/');
// });

app.controller('homeCtrl', function($scope) {
  console.log('homeCtrl');

  $scope.addTask = function(task) {
    $scope.tasks.push(task);
  }

  Tasks.getAllTasks()
    .then
});

Tasks.

app.controller('timeCtrl', function($scope, $moment) {
  $scope.time = $moment("", "YYYYMMDD").dateNow();

})

app.service('Tasks', function($http) {
  var taskItem;

  this.getAllasks = function(taskList) {
    return $http.get('/');
  };
  this.addTask = function(taskObject) {
    return $http.post('/create', {name: task.name, date: task.date}, completed: task.completed);
  };
});
