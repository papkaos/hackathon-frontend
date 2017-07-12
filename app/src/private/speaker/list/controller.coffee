dependencies = ['Speaker', '$state']

SpeakersController = (Speaker, $state) ->

  vm = this

  vm.speakers = []

  Speaker.query().then (speakers) ->
    vm.speakers = speakers

  vm.onDeleteSpeaker = (speaker) ->
    if confirm 'Sure?'
      speaker.delete().then(() ->
        $state.reload()
      )

  return vm

angular.module('private.speaker').controller 'SpeakersController', dependencies.concat SpeakersController
