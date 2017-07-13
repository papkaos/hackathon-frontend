(function() {
  var HackathonsController, dependencies;

  dependencies = ['Hackathon', '$state'];

  HackathonsController = function(Hackathon, $state) {
    var vm;
    vm = this;
    vm.hackathons = [];
    Hackathon.query().then(function(hackathons) {
      return vm.hackathons = hackathons;
    });
    vm.onDeleteHackathon = function(hackathon) {
      if (confirm('Sure?')) {
        return hackathon["delete"]().then(function() {
          return $state.reload();
        });
      }
    };
    return vm;
  };

  angular.module('private.hackathon').controller('HackathonsController', dependencies.concat(HackathonsController));

}).call(this);
