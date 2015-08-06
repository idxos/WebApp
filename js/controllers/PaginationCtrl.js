'use strict';

/* Controllers */

var paginationControllers = angular.module('paginationControllers', []);

paginationControllers.controller('PaginationCtrl', function ($scope, $log) {
  $scope.totalItems = 12;
  $scope.currentPage = 1;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
});




