'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('aboutCtrl', ['$scope',
        function($scope){
            $scope.about = $state.current.name;
        }
    ]);

myAppControllers.controller('homeCtrl', ['$scope', '$state',
    function($scope){ }
]);

