angular.module('app.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



        .state('home', {
        url: '/page1',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
    })

    .state('menu.homeGame', {
        url: 'page2',
        views: {
            'side-menu21': {
                templateUrl: 'templates/homeGame.html',
                controller: 'homeGameCtrl'
            }
        }
    })

    .state('menu.compte', {
        url: 'compte',
        views: {
            'side-menu21': {
                templateUrl: 'templates/compte.html',
                controller: 'compteCtrl'
            }
        }
    })

    .state('menu', {
        url: '/',
        templateUrl: 'templates/menu.html',
        abstract: true
    })

    .state('menu.chat', {
        url: 'page4',
        views: {
            'side-menu21': {
                templateUrl: 'templates/chat.html',
                controller: 'chatCtrl'
            }
        }
    })

    .state('menu.signup', {
        url: 'signup',
        views: {
            'side-menu21': {
                templateUrl: 'templates/signup.html',
                controller: 'homeCtrl'
            }
        }
    })

    // $urlRouterProvider.otherwise('/signup')



});