(function() {
  var SpeakerFormController, dependencies;

  dependencies = ['Speaker', '$state', '$stateParams'];

  SpeakerFormController = function(Speaker, $state, $stateParams) {
    var vm;
    vm = this;
    vm.speaker = {};
    if ($stateParams.id) {
      Speaker.get($stateParams.id).then(function(speaker) {
        return vm.speaker = speaker;
      });
    } else {
      vm.speaker = new Speaker();
    }
    vm.onCreateSpeaker = function(isValid) {
      if (isValid) {
        return vm.speaker.save().then(function() {
          return $state.go('main.private.speakers');
        });
      } else {
        return alert('Some errors');
      }
    };
    return vm;
  };

  angular.module('private.speaker').controller('SpeakerFormController', dependencies.concat(SpeakerFormController));

}).call(this);
