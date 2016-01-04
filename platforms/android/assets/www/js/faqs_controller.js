angular.module('starter.faqs', [])

.controller('faqsController', function($scope, $http, $state,  $ionicLoading, $timeout, $ionicPlatform) {
    $ionicPlatform.ready(function() {
        accordion();
    });
});
