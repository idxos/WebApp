angular.module('myApp', [])
    .controller('homeCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.alert = function () {
            alert("WOW");
        }
    }]);