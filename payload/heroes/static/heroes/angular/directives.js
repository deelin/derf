var heroesDirectives = angular.module('heroesDirectives', []);

heroesDirectives.controller('heroSelectorController', ['$scope', '$controller', '$state', '$rootScope', '$timeout', 'Hero',
    function($scope, $controller, $state, $rootScope, $timeout, Hero) {
        // PARAMS
        // //////////////////
        $scope.abilities = null;
        
        // METHODS
        // //////////////////
        
        $scope.setInitialHero = function(){
            if ($scope.heroes){
                var paramName = "hero" + $scope.index;
                if ($state.params[paramName]){
                    $scope.hero = $scope.heroes.filter(function(h){
                        return h.id == parseInt($state.params[paramName])
                    })[0];
                }
                if (!$scope.hero){
                    $scope.hero = $scope.heroes[$scope.index]
                }
                $scope.setHero($scope.hero);
            } else {
                $timeout(function(){
                    $scope.setInitialHero();
                }, 100)
            }
        }
        
        $scope.setInitialAbility = function(){
            if ($scope.abilities){
                var paramName = "ability" + $scope.index;
                if ($state.params[paramName]){
                    $scope.ability = $scope.abilities.filter(function(a){
                        return a.id == parseInt($state.params[paramName])
                    })[0];
                }
                if (!$scope.ability){
                    $scope.ability = $scope.abilities[0]
                }
                $scope.setAbility($scope.ability);
            } else {
                $timeout(function(){
                    $scope.setInitialAbility();
                }, 100)
            }
        }
        
        $scope.getHeroAbilities = function(){
            $scope.abilities = null;
            $scope.loadingAbilities = true;
            Hero.getAbilities($scope.selectedHeroes[$scope.index].id)
            .success(function(data){
                $scope.loadingAbilities = false;
                $scope.abilities = data;
                $scope.setInitialAbility();
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
            $scope.selectedHeroes[$scope.index] = hero;
            $scope.getHeroAbilities();
        }
        
        $scope.setAbility = function(ability){
            $scope.selectedAbility = ability;
            $scope.selectedAbilities[$scope.index] = ability;
        }
        
        $scope.add = function(){
            $scope.test += 1;
        }
        
        // INIT
        // //////////////////
        $scope.setInitialHero();
        
        // console.log($scope.selectedHero.id, $scope.selectedAbilities.id)
    }
])
.directive('heroSelector', function($rootScope) {
    return {
        restrict: 'E',
        scope: {
            'heroes': '=',
            'selectedHeroes': '=',
            'selectedAbilities': '=',
            'index': '=',
        },
        templateUrl: '/static/heroes/html/directives/hero-selector.html' + '?v=' + $rootScope.cachebuster,
        controller: 'heroSelectorController',
    };
});
