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

});
