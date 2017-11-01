'use strict';

var compareControllers = angular.module('compareControllers', []);

compareControllers.controller('mainCtrl', ['$scope', '$http', '$state',
    function($scope, $http, $state) {
      	console.log("controller loaded")
    }
])
