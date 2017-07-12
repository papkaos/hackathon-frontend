(function() {
  var TopicFormController, dependencies;

  dependencies = ['Topic', '$state', '$stateParams'];

  TopicFormController = function(Topic, $state, $stateParams) {
    var vm;
    vm = this;
    vm.topic = {};
    if ($stateParams.id) {
      Topic.get($stateParams.id).then(function(topic) {
        return vm.topic = topic;
      });
    } else {
      vm.topic = new Topic();
    }
    vm.onCreateTopic = function(isValid) {
      if (isValid) {
        return vm.topic.save().then(function() {
          return $state.go('main.private.topics');
        });
      } else {
        return alert('Some errors');
      }
    };
    return vm;
  };

  angular.module('private.topic').controller('TopicFormController', dependencies.concat(TopicFormController));

}).call(this);
