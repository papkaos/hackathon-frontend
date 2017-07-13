(function() {
  angular.module('private.hackathon', ['ui.router']).config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state('main.private.hackathons', {
        url: '/hackathons',
        templateUrl: 'src/private/hackathon/list/template.html',
        controller: 'HackathonsController',
        controllerAs: 'hackathonsCtrl'
      }).state('main.private.hackathon-add', {
        url: '/hackathon/new',
        templateUrl: 'src/private/hackathon/form/template.html',
        controller: 'HackathonFormController',
        controllerAs: 'hackathonFormCtrl'
      }).state('main.private.hackathon-edit', {
        url: '/hackathon/:id',
        templateUrl: 'src/private/hackathon/form/template.html',
        controller: 'HackathonFormController',
        controllerAs: 'hackathonFormCtrl'
      });
    }
  ]);

}).call(this);
