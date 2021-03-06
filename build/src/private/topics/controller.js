(function() {
  var TopicsController, dependencies;

  dependencies = ['Topic'];

  TopicsController = function(Topic) {
    var vm;
    vm = this;
    vm.topicName = '';
    vm.topics = [];
    Topic.query().then(function(topics) {
      return vm.topics = topics;
    });
    vm.onCreateTopic = function() {
      console.log(vm.topicName);
      new Topic({
        name: vm.topicName
      }).create();
      return vm.topicName = '';
    };
    vm.onDeleteTopic = function(topic) {
      return topic["delete"]();
    };
    return vm;
  };

  angular.module('private').controller('TopicsController', dependencies.concat(TopicsController));

}).call(this);
