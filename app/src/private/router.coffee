angular.module('private', [
  'ui.router'
  'private.topic'
  'private.speaker'
  'private.hackathon'
]).config ['$stateProvider', ($stateProvider) ->

  $stateProvider

    .state 'main.private',
      url: '/private'
      controller: 'PrivateController'
      templateUrl: 'src/private/template.html'

]
