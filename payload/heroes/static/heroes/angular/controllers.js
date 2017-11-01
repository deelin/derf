'use strict';

var heroControllers = angular.module('heroControllers', []);

heroControllers.controller('mainCtrl', ['$scope', '$http', '$state', 'Hero',
    function($scope, $http, $state, Hero) {
        Hero.getHeroes()
        .success(function(data){
            $scope.heroes = data;
        })
        .error(function(data){
            console.log(data)
        })
    }
])
