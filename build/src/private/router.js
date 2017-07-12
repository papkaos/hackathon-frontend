(function() {
  angular.module('private', ['ui.router', 'private.topic', 'private.speaker']).config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('main.private', {
        url: '/private',
        controller: 'PrivateController',
        templateUrl: 'src/private/template.html'
      });
    }
  ]);

}).call(this);
