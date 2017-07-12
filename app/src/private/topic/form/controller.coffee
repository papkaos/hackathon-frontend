dependencies = ['Topic', '$state', '$stateParams']

TopicFormController = (Topic, $state, $stateParams) ->

  vm = this

  vm.topic = {}

  if $stateParams.id
    Topic.get($stateParams.id).then((topic) ->
      vm.topic = topic
    );
  else
    vm.topic = new Topic()

  vm.onCreateTopic = (isValid) ->
    if isValid
      vm.topic.save().then(() ->
        $state.go 'main.private.topics'
      )
    else
      alert 'Some errors'

  return vm

angular.module('private.topic').controller 'TopicFormController', dependencies.concat TopicFormController
