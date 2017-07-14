(function() {
  var Config, dependencies;

  angular.module('main', ['shared', 'private', 'ui.router', 'ui-components']);

  dependencies = ['$stateProvider', '$urlRouterProvider'];

  Config = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    return $stateProvider.state('main', {
      url: '',
      templateUrl: 'src/main/template',
      controller: 'AppController'
    });
  };

  angular.module('main').config(dependencies.concat(Config));

}).call(this);
