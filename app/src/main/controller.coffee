dependencies = ['Topic']

AppController = (Topic) ->
  vm = this

  vm.modelDate = moment().format 'YYYY-MM-DD, HH:mm'

  vm.topicName = ''

  vm.topics = []

  Topic.query().then (topics) ->
    vm.topics = topics

  vm.onCreateTopic = ->
    console.log(vm.topicName)
    vm.topicName = ''

  vm.onDeleteTopic = (topic) ->
    topic.delete()

  return vm

angular.module('main').controller 'AppController', dependencies.concat AppController
