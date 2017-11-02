var heroesDirectives = angular.module('heroesDirectives', []);

heroesDirectives.controller('heroSelectorController', ['$scope', '$controller', '$rootScope', 
    function($scope, $controller, $rootScope) {
        
    }
])
.directive('heroSelector', function($rootScope) {
    return {
        restrict: 'E',
        scope: {
            'heroes': '=',
            'selectedHero': '=',
            'selectedAbility': '=',
        },
        templateUrl: '/static/heroes/html/directives/hero-selector.html' + '?v=' + $rootScope.cachebuster,
        controller: 'heroSelectorController',
    };
});
