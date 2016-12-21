/* JAVA SCRIPT*/

var app = angular.module('app',[]);

app.controller('principalController', function ($scope){
    $scope.user = {
        "email": "exemplo@exemplo.com",
        "password": "123quatro5678",
        "error_message": "Email ou senha está errado",
        "key": "d6f67bc92bbaf06ec44b828d0da4eda9"
    }
    $scope.obj = {
        tela1: 'active',
        value2: false
    }
    
    $scope.myClass = [];
    $scope.addClass = function() {
      $scope.myClass.push('active');
    }
    $scope.removeClass = function() {
      $scope.myClass.pop('active');
    }
    $scope.myClass2 = [];
    $scope.addClass2 = function() {
      $scope.myClass2.push('active');
    }
    $scope.removeClass2 = function() {
      $scope.myClass2.pop('active');
    }
});

