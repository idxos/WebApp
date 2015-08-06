'use strict';

/* Controllers */

var equipmentControllers = angular.module('equipmentControllers', []);

equipmentControllers.controller('EquipmentCtrl', function ($scope) {
  
  $scope.message = [
    { title:'The Equipment Title', message:'Message from the EquipmentCtrl' }
  ];

});