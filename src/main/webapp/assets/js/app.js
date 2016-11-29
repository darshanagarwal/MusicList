'use strict';

/**
 * @ngdoc overview
 * @name translateApp
 * @description
 * # translateApp
 *
 * Main module of the application.
 */
angular
        .module('pis', [
            'ngResource',
            'ngRoute',
            'oc.lazyLoad'
        ])
        // Router
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'assets/views/home.html',
                        controller: 'HomeCtrl',
                        resolve: {
                            loadMyFile: function ($ocLazyLoad) {
                                return $ocLazyLoad.load(
                                        {
                                            name: 'pis',
                                            files: ['assets/controller/homeCtrl.js']
                                        })
                            }
                        }
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        }).run(function ($rootScope, $location, $window) {
    $rootScope.$on('$routeChangeSuccess', function () {
        console.log("page: "+$location.url());
    });
}).filter('imagefilter', function () {
    console.log(1);
    return function () {
        return "\u20BC";
        //other mappings
    };
});