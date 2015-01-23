'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('homeCtrl', ['$scope', '$http', '$timeout',
    function($scope, $http, $timeout){

        function clearInfo () {
            $timeout(function(){
                $scope.info = "";
            }, 2500);
        }

        $scope.todoList = [
            {"text":"first Job", "todoCheck": false},
            {"text":"second Job", "todoCheck": true}
        ];

        $scope.addTodo = function(event) {
            if (event.keyCode === 13 && event.target.value != '') {
                $scope.todoList.push({"text":$scope.todo, "todoCheck": false});
                $scope.todo = '';
            }
        };

        $scope.selected = function(){
            var selected = 0;
            angular.forEach($scope.todoList, function(el){
                el.todoCheck ? selected++ : '' ;
            });

            return selected;
        };

        $scope.selectedAllState = false;
        $scope.selectAll = function() {
            if ($scope.selectedAllState) {
                angular.forEach($scope.todoList, function(el){
                    el.todoCheck = true;
                });
                $scope.selectedAllState = true;
            } else {
                angular.forEach($scope.todoList, function(el){
                    el.todoCheck = false;
                });
                $scope.selectedAllState = false;
            }
        };

        $scope.save = function() {
            var data = JSON.stringify($scope.todoList);
            console.dir(data);
            $http.post('http://127.0.0.1:1337/todoList', data)
                .success(function(data, status){
                    console.log(data);
                    console.log(status);
                    $scope.todoList = [];
                    $scope.info = '<span class="success-message">List saved successfully</span>';
                    clearInfo();
                })
                .error(function(data, status){
                    console.log(data);
                    console.log(status);
                    $scope.info = '<span class="error-message">Not saved</span>';
                    clearInfo();
                });
        };

        $scope.load = function() {
            $http.get('http://127.0.0.1:1337/todoList')
                .success(function(data, status){
                    console.log(data);
                    console.log(status);
                    $scope.todoList = data;
                    $scope.info = '<span class="success-message">List load successfully</span>';
                    clearInfo();
                })
                .error(function(data, status){
                    console.log(data);
                    console.log(status);
                    $scope.info = '<span class="error-message">Not load</span>';
                    clearInfo();
                });

        };

        $scope.removeSelected = function(){
            var originTodo = $scope.todoList;
            $scope.todoList = [];
            angular.forEach(originTodo, function(el) {
                if (!el.todoCheck) {
                    $scope.todoList.push(el);

                }
            });
            $scope.selectedAllState = false;
        }

    }  //  end homeCtrl
]);

myAppControllers.controller('aboutCtrl', ['$scope',
        function($scope){

        }
    ]);
