'use strict';

var app = angular.module('taskApp');

app.directive('myTable', function() {
  return {
    scope: {
      list: '=',
    },
    controller: 'myTaskListCtrl',
    templateUrl: '/partials/templates/table.jade'
  };
});

app.controller('myTaskListCtrl', function($scope) {
  $scope.sort = function(header) {
    $scope.order = $scope.order === header ? '-' + header : header;
  };
});
