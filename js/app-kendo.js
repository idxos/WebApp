'use strict';

/* App Module */
var myApp = angular.module('myApp', [                          
  'ngRoute',
  'ngAnimate',
  'dashboardControllers',
  'authControllers',
  'productControllers',
  'equipmentControllers',
  'membersControllers',
  'kendo.directives'
]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'AuthCtrl'
      }).
      when('/login', {
        templateUrl: 'views/auth/login.html',
        controller: 'RegistrationController'
      }).
      when('/registration', {
        templateUrl: 'views/auth/register.html',
        controller: 'RegistrationController'
      }).
      when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'AuthCtrl'
      }).
      when('/equipment', {
        templateUrl: 'views/equipment.html',
        controller: 'EquipmentCtrl'
      }).
      when('/members', {
        templateUrl: 'views/members.html',
        controller: 'MembersCtrl'
      }).
      when('/products', {
        templateUrl: 'views/product.html',
        controller: 'productControllers'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }]);

