dependencies = ['Hackathon', '$state']

HackathonsController = (Hackathon, $state) ->

  vm = this

  vm.hackathons = []

  Hackathon.query().then (hackathons) ->
    vm.hackathons = hackathons

  vm.onDeleteHackathon = (hackathon) ->
    if confirm 'Sure?'
      hackathon.delete().then(() ->
        $state.reload()
      )

  return vm

angular.module('private.hackathon').controller 'HackathonsController', dependencies.concat HackathonsController
