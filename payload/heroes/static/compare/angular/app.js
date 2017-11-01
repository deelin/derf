'use strict';

var compareApp = angular.module('compareApp', [
	'ui.router',
    'compareControllers',
]);

compareApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode({enabled: true});
    
    // Now set up the states/routes
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '/static/compare/html/main.html',
            controller: 'mainCtrl',
        })
});
