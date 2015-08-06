angular.module('signIn', ['ngCookies'])
    .controller('signInCtrl', ['$scope', '$rootScope', '$http', '$cookies', '$cookieStore', '$location', '$routeParams', function ($scope, $rootScope, $http, $cookies, $cookieStore, $location, $routeParams) {
        $scope.message = $routeParams.message;
        $scope.signIn = function () {
            $scope.showMessage = false;
            var params = {
                LoginId: $scope.LoginId,
                Password: $scope.Password
            };
            $http.post('/api/RimUsers/', params)
            .success(function (params, status, headers, config) {
                $scope.successMessage = "Login was successful!";
                $scope.showErrorMessage = false;
                $scope.showSuccessMessage = true;
                window.location = '#/home';
            })
            .error(function (params, status, headers, config) {
                $scope.message = data.error_description.replace(/["']{1}/gi, "");
                $scope.showMessage = true;
            });
        }
    }]);