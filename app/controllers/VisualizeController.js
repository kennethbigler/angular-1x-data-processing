/*global app*/

app.controller('VisualizeController', ['$scope', 'VisualizeService', '$window', function ($scope, $VS, $window) {
    "use strict";
    // graph vars
    $scope.width = $window.innerWidth - 60;
    $scope.height = $scope.width / 2.5;
    $scope.yAxis = 'Number';
    $scope.xAxis = 'Time';
    
    // initialize variables for graph
    function init() {
        $scope.p = '%';
        $scope.max = $VS.nMax;
        $scope.data = $VS.nData;
        $scope.aExpected = $scope.bExpected = $scope.aGoal = $scope.bGoal = $VS.expected;
    }
    init();
    
    // swap data between regular and normalized data
    $scope.swapData = function () {
        if ($scope.data === $VS.nData) {
            $scope.p = '';
            $scope.max = $VS.max;
            $scope.data = $VS.data;
            $scope.aExpected = $VS.aExpected;
            $scope.bExpected = $VS.bExpected;
        } else {
            init();
        }
    };
    
    // show A data
    $scope.showA = function () {
        $scope.p = '';
        $scope.max = $VS.aMax;
        $scope.data = $VS.aData;
        $scope.aExpected = $VS.aExpected;
        $scope.bExpected = $VS.aGoal;
    };
    
    // show B data
    $scope.showB = function () {
        $scope.p = '';
        $scope.max = $VS.bMax;
        $scope.data = $VS.bData;
        $scope.bExpected = $VS.bExpected;
        $scope.aExpected = $VS.bGoal;
    };
}]);