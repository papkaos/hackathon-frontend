dependencies = ['Hackathon', 'Topic', 'Speaker', '$state', '$stateParams']

HackathonFormController = (Hackathon, Topic, Speaker, $state, $stateParams) ->

  vm = this

  vm.hackathon = {}
  vm.topics = []
  vm.speakers = []

  vm.selectValue = 16

  init = ->
    if $stateParams.id
      Hackathon.get($stateParams.id).then((hackathon) ->
        vm.hackathon = hackathon
      );
    else
      vm.hackathon = new Hackathon()

    Topic.query().then (topics) ->
      vm.topics = topics

    Speaker.query().then (speakers) ->
      vm.speakers = speakers

  vm.onCreateHackathon = (isValid) ->
    if isValid
      vm.hackathon.save().then(() ->
        $state.go 'main.private.hackathons'
      )
    else
      alert 'Some errors'

  init()

  return vm

angular.module('private.hackathon').controller 'HackathonFormController', dependencies.concat HackathonFormController
