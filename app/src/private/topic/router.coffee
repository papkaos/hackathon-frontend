angular.module('private.topic', ['ui.router']).config ['$stateProvider', ($stateProvider) ->

  $stateProvider

    .state 'main.private.topics',
      url: '/topics'
      templateUrl: 'src/private/topic/list/template.html'
      controller: 'TopicsController'
      controllerAs: 'topicsCtrl'

    .state 'main.private.topic-add',
      url: '/topic/new'
      templateUrl: 'src/private/topic/form/template.html'
      controller: 'TopicFormController'
      controllerAs: 'topicFormCtrl'

    .state 'main.private.topic-edit',
      url: '/topic/:id'
      templateUrl: 'src/private/topic/form/template.html'
      controller: 'TopicFormController'
      controllerAs: 'topicFormCtrl'

]
