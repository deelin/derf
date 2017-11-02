'use strict';

var heroApp = angular.module('heroApp', [
	'ui.router',
	'heroServices',
    'heroControllers',
    'heroesDirectives',
]);

heroApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode({enabled: true});
    
    // Now set up the states/routes
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '/static/heroes/html/main.html',
            controller: 'mainCtrl',
        })
        .state('main.comparison', {
            url: 'comparison/?hero0&hero1&ability0&ability1',
            templateUrl: '/static/heroes/html/comparison.html',
            controller: 'comparisonCtrl',
        })
});
