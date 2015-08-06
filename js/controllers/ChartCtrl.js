myApp.controller('ChartCtrl', ['$scope', function ($scope) {
    $scope.percent = 65;
    $scope.anotherPercent = -45;
    $scope.anotherOptions = {
        animate:{
            duration:0,
            enabled:false
        },
        barColor:'#2C3E50',
        scaleColor:false,
        lineWidth:20,
        lineCap:'circle'
    };
}]);