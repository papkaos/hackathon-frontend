(function() {
  var TopicsController, dependencies;

  dependencies = ['Topic', '$state'];

  TopicsController = function(Topic, $state) {
    var vm;
    vm = this;
    vm.topics = [];
    Topic.query().then(function(topics) {
      return vm.topics = topics;
    });
    vm.onDeleteTopic = function(topic) {
      if (confirm('Sure?')) {
        return topic["delete"]().then(function() {
          return $state.reload();
        });
      }
    };
    return vm;
  };

  angular.module('private.topic').controller('TopicsController', dependencies.concat(TopicsController));

}).call(this);
