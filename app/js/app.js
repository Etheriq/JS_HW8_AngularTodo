'use strict';

/* App Module */

var myApp = angular.module('myApp', ['ui.router', 'myAppControllers', 'ngSanitize']);

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/home.html",
            controller: 'homeCtrl'
        })
        .state('about', {
            url: "/about",
            templateUrl: "views/about.html",
            controller: "aboutCtrl"
        });

    $locationProvider.html5Mode(true);

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.transformRequest = function( data ) {
        return angular.isObject( data ) && String( data ) !== '[object File]' ? angular.toParam( data ) : data;
    };

});
