angular.module('starter.splash', [])

.controller('splashController', function($scope, $http, $state,  $ionicLoading, $timeout, $ionicPlatform) {
    $ionicPlatform.ready(function() {
              window_resize();
              splash_screen();
    });
});