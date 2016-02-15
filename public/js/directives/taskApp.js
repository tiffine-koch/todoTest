'use strict';

var app = angular.module('someApp');

app.directive('myTable', function() {
  return {
    scope: {
      list: '=',
    },
    controller: 'myTaskListCtrl',
    templateUrl: '/partials/templates/myTable.html'
  };
});

app.controller('myTaskListCtrl', function($scope) {
  $scope.sort = function(header) {
    $scope.order = $scope.order === header ? '-' + header : header;
  };
});
