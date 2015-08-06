'use strict';

/* Controllers */

var tabControllers = angular.module('tabControllers', []);

tabControllers.controller('TabsCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Search', content:'Dynamic content 1' },
    { title:'Results', content:'Dynamic content 2', disabled: true },
    { title:'Favorites', content:'Dynamic content 3' }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      $window.alert('You\'ve selected the alert tab!');
    });
  };
});