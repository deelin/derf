'use strict';

var heroControllers = angular.module('heroControllers', []);

heroControllers.controller('mainCtrl', ['$scope', '$rootScope', '$http', '$state', 'Hero',
    function($scope, $rootScope, $http, $state, Hero) {
        // PARAMS
        // //////////////////
        $rootScope.cachebuster = Date.now().toString();
        
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
])
