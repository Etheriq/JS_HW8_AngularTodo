'use strict';

/* App Module */

var myApp = angular.module('myApp', ['ui.router', 'myAppControllers']);

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/home.html",
            controller: 'aboutCtrl'
        })
        .state('about', {
            url: "/about",
            templateUrl: "views/about.html",
            controller: "aboutCtrl"
        });

    $locationProvider.html5Mode(true)
});