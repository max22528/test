angular.module('app',['changeNumberAnimate'])
.controller('testA', ['$scope','changeNumberAnimate', function ($scope,numberAnimate){
  $scope.speed = 100000;
  $scope.weight ={}; 
  $scope.weight.input = 10; 
  $scope.weight.newNum = 0;  
  $scope.numberChange = function(){ 
    numberAnimate.changeNumber.apply($scope.weight, [$scope.speed]);
  };
}]);

    
  
