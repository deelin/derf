'use strict';

var heroApp = angular.module('heroApp', [
	'ui.router',
    'heroControllers',
]);

heroApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode({enabled: true});
    
    // Now set up the states/routes
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '/static/hero/html/main.html',
            controller: 'mainCtrl',
        })
});
