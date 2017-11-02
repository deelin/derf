'use strict';

var heroControllers = angular.module('heroControllers', []);

// responsible for getting heroes and user input
heroControllers.controller('mainCtrl', ['$scope', '$rootScope', '$http', '$state', 'Hero',
    function($scope, $rootScope, $http, $state, Hero) {
        // PARAMS
        // //////////////////
        $rootScope.cachebuster = Date.now().toString();
        $scope.hero1 = null;
        $scope.hero2 = null;
        $scope.ability1 = null;
        $scope.ability2 = null;
        
        // METHODS
        // //////////////////
        
        $scope.getHeroes = function(){
            Hero.getHeroes()
            .success(function(data){
                $scope.heroes = data;
            })
            .error(function(data){
                console.log(data)
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
heroControllers.controller('comparisonCtrl', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
        
    }
]);
