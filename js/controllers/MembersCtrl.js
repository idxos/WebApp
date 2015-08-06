'use strict';

/* Controllers */

var membersControllers = angular.module('membersControllers', []);

membersControllers.controller('MembersCtrl', function ($scope) {
  $scope.message = [
    { title:'The MembersTitle', message:'Message from the MembersCtrl' }
  ];

});