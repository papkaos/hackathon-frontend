dependencies = ['Speaker', '$state', '$stateParams']

SpeakerFormController = (Speaker, $state, $stateParams) ->

  vm = this

  vm.speaker = {}

  if $stateParams.id
    Speaker.get($stateParams.id).then((speaker) ->
      vm.speaker = speaker
    );
  else
    vm.speaker = new Speaker()

  vm.onCreateSpeaker = (isValid) ->
    if isValid
      vm.speaker.save().then(() ->
        $state.go 'main.private.speakers'
      )
    else
      alert 'Some errors'

  return vm

angular.module('private.speaker').controller 'SpeakerFormController', dependencies.concat SpeakerFormController
