angular.module 'main', ['shared', 'private', 'ui.router']

dependencies = ['$stateProvider', '$urlRouterProvider']

Config = ($stateProvider, $urlRouterProvider) ->

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state 'main',
      url: ''
      templateUrl: 'src/main/template'
      controller: 'AppController'

angular.module('main').config dependencies.concat Config
