dependencies = ['Topic', '$state']

TopicsController = (Topic, $state) ->

  vm = this

  vm.topics = []

  Topic.query().then (topics) ->
    vm.topics = topics

  vm.onDeleteTopic = (topic) ->
    if confirm 'Sure?'
      topic.delete().then(() ->
        $state.reload()
      )

  return vm

angular.module('private.topic').controller 'TopicsController', dependencies.concat TopicsController
