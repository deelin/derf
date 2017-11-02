var heroesDirectives = angular.module('heroesDirectives', []);

heroesDirectives.controller('heroSelectorController', ['$scope', '$controller', '$state', '$rootScope', 'Hero',
    function($scope, $controller, $state, $rootScope, Hero) {
        // PARAMS
        // //////////////////
        $scope.abilities = null;
        
        // METHODS
        // //////////////////
        
        $scope.setInitialHero = function(){
            if ($state.params.hero1){
                // TODO: set her from state
            } else {
                $scope.setHero($scope.heroes[0]);
            }
        }
        
        $scope.getHeroAbilities = function(){
            $scope.loadingAbilities = true;
            Hero.getAbilities($scope.selectedHero.id)
            .success(function(data){
                $scope.loadingAbilities = false;
                $scope.abilities = data;
                $scope.setAbility($scope.abilities[0]);
            })
            .error(function(){
                $scope.loadingAbilities = false;
                alert("error loading abilities")
            })
        }
        
        // ACTIONS
        // //////////////////
        
        $scope.setHero = function(hero){
            $scope.selectedHero = hero;
            $scope.getHeroAbilities();
        }
        
        $scope.setAbility = function(ability){
            $scope.selectedAbility = ability;
        }
        
        // INIT
        // //////////////////
        $scope.setInitialHero();
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