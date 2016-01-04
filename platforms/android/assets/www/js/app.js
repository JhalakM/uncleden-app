angular.module('starter',
                [
                    'ionic',
                    //'starter.controllers',
                    'starter.splash',
                    'starter.dashboard',
                    'starter.about',
                    'starter.service',
                    'starter.whyuncleden',
                    'starter.cities',
                    'starter.terms',
                    'starter.request',
                    'starter.faqs',
                    'starter.current_offers'
                ])

.run(function($ionicPlatform, $state, $rootScope, $location) {

})

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider

		.state('splash', {
            url: '/splash',
            templateUrl: 'templates/splash.html',
            controller: 'splashController'
        })

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
            controller: 'dashboardController'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'aboutController'
        })

        .state('service', {
            url: '/service',
            templateUrl: 'templates/service.html',
            controller: 'serviceController'
        })

        .state('whyuncleden', {
            url: '/whyuncleden',
            templateUrl: 'templates/whyuncleden.html',
            controller: 'whyuncledenController'
        })

        .state('cities', {
            url: '/cities',
            templateUrl: 'templates/cities.html',
            controller: 'citiesController'
        })

        .state('terms', {
            url: '/terms',
            templateUrl: 'templates/terms.html',
            controller: 'termsController'
        })

         .state('request', {
            url: '/request',
            templateUrl: 'templates/request.html',
            controller: 'requestController'
        })

         .state('faqs', {
            url: '/faqs',
            templateUrl: 'templates/faqs.html',
            controller: 'faqsController'
        })

        .state('current_offers', {
            url: '/current_offers',
            templateUrl: 'templates/current_offers.html',
            controller: 'current_offersController'
        });

        $urlRouterProvider.otherwise('/splash');

    }
])
