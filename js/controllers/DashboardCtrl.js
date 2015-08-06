'use strict';

/* Controllers */

var dashboardControllers = angular.module('dashboardControllers', []);

dashboardControllers.controller('DashboardCtrl', function ($scope) {
  $scope.message = [
    { title:'The Auth Title', message:'Message from the AuthCtrl' }
  ];

});