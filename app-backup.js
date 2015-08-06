'use strict';

/* App Module */


var myApp = angular.module('myApp', [
  'ui.bootstrap',                           
  'ngRoute',
  'chart.js',
  'authControllers',
  'dashboardControllers',
  'equipmentControllers',
  'membersControllers',
  'dropdownControllers',
  'paginationControllers',
  'modalControllers',
  'tabControllers'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'views/charts.html',
        controller: 'ChartsCtrl'
      }).
      when('/login', {
        templateUrl: 'views/auth/login.html',
        controller: 'AuthCtrl'
      }).
      when('/registration', {
        templateUrl: 'views/auth/register.html',
        controller: 'AuthCtrl'
      }).
      when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      }).
      when('/equipment', {
        templateUrl: 'views/equipment.html',
        controller: 'EquipmentCtrl'
      }).
      when('/members', {
        templateUrl: 'views/members.html',
        controller: 'MembersCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);

