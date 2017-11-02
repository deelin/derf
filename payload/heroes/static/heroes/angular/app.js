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
            url: 'comparison/?hero1&hero2&heroAbility1&heroAbility2',
            templateUrl: '/static/heroes/html/comparison.html',
            controller: 'comparisonCtrl',
        })
});
