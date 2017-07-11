(function() {
  var AppController, dependencies;

  dependencies = ['Topic'];

  AppController = function(Topic) {
    var vm;
    vm = this;
    vm.modelDate = moment().format('YYYY-MM-DD, HH:mm');
    vm.topicName = '';
    vm.topics = [];
    Topic.query().then(function(topics) {
      return vm.topics = topics;
    });
    vm.onCreateTopic = function() {
      console.log(vm.topicName);
      return vm.topicName = '';
    };
    vm.onDeleteTopic = function(topic) {
      return topic["delete"]();
    };
    return vm;
  };

  angular.module('main').controller('AppController', dependencies.concat(AppController));

}).call(this);
