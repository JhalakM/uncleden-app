angular.module('starter.terms', [])

.controller('termsController', function($scope, $http, $state,  $ionicLoading, $timeout, $ionicPlatform) {
    $ionicPlatform.ready(function() {
		accordion();
    });
});