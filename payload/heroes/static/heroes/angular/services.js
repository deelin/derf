'use strict';

var heroServices = angular.module('heroServices', []);

// Hero
///////////////////////////////////////////
heroServices.factory('Hero', ['$http',
    function($http){
        var HeroMethods = {};
        HeroMethods.getHeroes = function() {
            return $http({
                method: 'GET',
                url: '/api/hero/'
            });
        }

        HeroMethods.getAbilities = function(hero) {
            return $http({
                method: 'GET',
                url: '/api/ability/?hero_id=' + str(hero)
            });
        }

        HeroMethods.getInteractions = function(ability1, ability2) {
            var url = "/api/interaction/?ability1=" + ability1 + "&ability2=" + ability2
            return $http({
                method: 'GET',
                url: url
            });
        }

        return HeroMethods;
    }
]);
