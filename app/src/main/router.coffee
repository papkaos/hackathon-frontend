angular.module 'main', ['shared', 'ui.router']

dependencies = ['$stateProvider', '$urlRouterProvider']

Config = ($stateProvider, $urlRouterProvider) ->
  defaultState =
    name: 'main'
    url: '/'

  topicsState =
    name: 'topics'
    url: '/topics'
    templateUrl: 'src/private/topics/template.html'
    controller: 'TopicController'
    controllerAs: 'topicCtrl'

  $urlRouterProvider.otherwise('/');

  $stateProvider.state(defaultState);
  $stateProvider.state(topicsState);

angular.module('main').config dependencies.concat Config
