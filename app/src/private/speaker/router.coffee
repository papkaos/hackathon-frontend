angular.module('private.speaker', ['ui.router']).config ['$stateProvider', ($stateProvider) ->

  $stateProvider

    .state 'main.private.speakers',
      url: '/speakers'
      templateUrl: 'src/private/speaker/list/template.html'
      controller: 'SpeakersController'
      controllerAs: 'speakersCtrl'

    .state 'main.private.speaker-add',
      url: '/speaker/new'
      templateUrl: 'src/private/speaker/form/template.html'
      controller: 'SpeakerFormController'
      controllerAs: 'speakerFormCtrl'

    .state 'main.private.speaker-edit',
      url: '/speaker/:id'
      templateUrl: 'src/private/speaker/form/template.html'
      controller: 'SpeakerFormController'
      controllerAs: 'speakerFormCtrl'

]
