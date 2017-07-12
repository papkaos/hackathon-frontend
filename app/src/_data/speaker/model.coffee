dependencies = ['AppModel']

Speaker = (AppModel) ->

  class Speaker extends AppModel
    @configure url : '/speakers', name : 'speaker'

angular.module('main').factory 'Speaker', dependencies.concat Speaker
