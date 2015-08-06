angular.module('usersManager', [])
    .controller('rimUsersCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.getList = function () {
            $http.get('/api/RimUsers/')
                .success(function (data, status, headers, config) {
                    $scope.rimUsers = data;
                });
        }

        //Get the current user's list when the page loads.
        $scope.getList();
    }]);