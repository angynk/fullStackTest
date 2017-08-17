'use strict';

appAngular.config(['$stateProvider', '$urlRouterProvider',"$locationProvider",
    function($stateProvider, $urlRouterProvider,$locationProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/404');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: '../view/home.html'
            })
            .state('tasks', {
                url: '/tasks',
                templateUrl: '../view/tasks.html',
                controller : 'taskController'
            })
            .state('tasksList', {
                url: '/tasksList',
                templateUrl: '../view/tasksList.html',
                controller : 'listController'
            });
    }

]);