(function() {
  var AppController, dependencies;

  dependencies = ['Topic'];

  AppController = function(Topic) {
    var vm;
    vm = this;
    return vm;
  };

  angular.module('main').controller('AppController', dependencies.concat(AppController));

}).call(this);
