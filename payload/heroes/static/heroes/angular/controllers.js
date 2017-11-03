'use strict';

var heroControllers = angular.module('heroControllers', []);

// responsible for getting heroes and user input
heroControllers.controller('mainCtrl', ['$scope', '$rootScope', '$http', '$state', 'Hero',
    function($scope, $rootScope, $http, $state, Hero) {
        // PARAMS
        // //////////////////
        $rootScope.cachebuster = Date.now().toString();
        $scope.selectedHeroes = [undefined, undefined];
        $scope.selectedAbilities = [undefined, undefined];
        
        // METHODS
        // //////////////////
        
        $scope.getHeroes = function(){
            $scope.loadingHeroes = true;
            Hero.getHeroes()
            .success(function(data){
                $scope.loadingHeroes = false;
                $scope.heroes = data;
            })
            .error(function(data){
                $scope.loadingHeroes = false;
            })
        }
        
        // ACTIONS
        // //////////////////
        
        // INIT
        // //////////////////
        $scope.getHeroes();
    }
]);

// responsible for getting/displaying/sharing interaction data
heroControllers.controller('comparisonCtrl', ['$scope', '$http', '$state', '$sce', 'Hero',
    function($scope, $http, $state, $sce, Hero) {
        // PARAMS
        // //////////////////

        // METHODS
        // //////////////////
        $scope.getInteraction = function(){
            $scope.loadingInteration = true;
            Hero.getInteractions($state.params.ability0, $state.params.ability1)
            .success(function(data){
                $scope.loadingInteration = false;
                if (data.video){
                    data.video = $sce.trustAsResourceUrl(data.video);
                }
                $scope.interaction = data;
            })
            .error(function(data){
                $scope.loadingInteration = false;
                $scope.interactionError = true
            })
        }

        // ACTIONS
        // //////////////////
        
        // INIT
        // //////////////////
        $scope.getInteraction();
    }
]);
