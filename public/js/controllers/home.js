'use strict';

// var app = angular.module('taskApp', []);

var app = angular.module('taskApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {url: '/', templateUrl: 'views/index.jade', controller: 'homeCtrl'})
    .state('home', {url: '/home', templateUrl: '/views/home.jade', controller: 'taskCtrl'});
    // .state('table', {url: '/', templateUrl: 'views/table.jade', controller: 'tableCtrl'});

    $urlRouterProvider.otherwise('/');
});

app.controller('homeCtrl', function($scope, $state) {
  console.log('homeCtrl');
  $scope.tasks = [];

  $scope.addTask = function(task) {
    $scope.tasks.push($scope.newTask);
    $scope.newTask = {};
  }
});

app.controller('taskCtrl', function($scope, $state, $moment) {

  console.log('taskCtrl');
  $scope.getTasks = function($scope) {
    console.log('here');
  }
  //   $scope.time = $moment("", "YYYYMMDD").dateNow();
});
//
//   Tasks.getAllTasks()
//     .then
// });

app.service('Tasks', function($http) {
  var taskItem;

  this.getAllasks = function(taskList) {
    return $http.get('/');
  };
  this.addTask = function(taskObject) {
    return $http.post('/create', {name: task.name, desc: task.desc, date: task.date, completed: task.completed});
  };
});
