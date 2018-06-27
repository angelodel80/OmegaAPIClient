'use strct';

var angular = require('angular');

console.log("start app");
var app = angular.module('angularTest',[]);
console.log("angular app", app);

app.controller('testCtr', ['$scope', function($scope){
    console.log("start controller");

    $scope.name = 'Funziona!';
}]);