(function() {
  var SpeakersController, dependencies;

  dependencies = ['Speaker', '$state'];

  SpeakersController = function(Speaker, $state) {
    var vm;
    vm = this;
    vm.speakers = [];
    Speaker.query().then(function(speakers) {
      return vm.speakers = speakers;
    });
    vm.onDeleteSpeaker = function(speaker) {
      if (confirm('Sure?')) {
        return speaker["delete"]().then(function() {
          return $state.reload();
        });
      }
    };
    return vm;
  };

  angular.module('private.speaker').controller('SpeakersController', dependencies.concat(SpeakersController));

}).call(this);
