(function() {
  var HackathonFormController, dependencies;

  dependencies = ['Hackathon', 'Topic', 'Speaker', '$state', '$stateParams'];

  HackathonFormController = function(Hackathon, Topic, Speaker, $state, $stateParams) {
    var init, vm;
    vm = this;
    vm.hackathon = {};
    vm.topics = [];
    vm.speakers = [];
    vm.selectValue = 16;
    init = function() {
      if ($stateParams.id) {
        Hackathon.get($stateParams.id).then(function(hackathon) {
          return vm.hackathon = hackathon;
        });
      } else {
        vm.hackathon = new Hackathon();
      }
      Topic.query().then(function(topics) {
        return vm.topics = topics;
      });
      return Speaker.query().then(function(speakers) {
        return vm.speakers = speakers;
      });
    };
    vm.onCreateHackathon = function(isValid) {
      if (isValid) {
        return vm.hackathon.save().then(function() {
          return $state.go('main.private.hackathons');
        });
      } else {
        return alert('Some errors');
      }
    };
    init();
    return vm;
  };

  angular.module('private.hackathon').controller('HackathonFormController', dependencies.concat(HackathonFormController));

}).call(this);
