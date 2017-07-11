dependencies = ['AppModel']

Topic = (AppModel) ->

  class Topic extends AppModel
    @configure url : '/topics', name : 'topic'

angular.module('main').factory 'Topic', dependencies.concat Topic
