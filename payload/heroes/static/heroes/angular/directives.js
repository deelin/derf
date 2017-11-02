var heroesDirectives = angular.module('heroesDirectives', []);

heroesDirectives.controller('heroController', ['$scope', '$controller', '$rootScope', 
    function($scope, $controller, $rootScope, Course) {
        
    }
])
.directive('hero', function($rootScope) {
    return {
        restrict: 'E',
        scope: {
            'hero': '=',
        },
        templateUrl: '/static/heroes/html/directives/hero.html' + '?v=' + $rootScope.cachebuster,
        controller: 'heroController',
    };
});
