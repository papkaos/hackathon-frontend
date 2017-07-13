dependencies = ['AppModel']

Hackathon = (AppModel) ->

  class Hackathon extends AppModel
    @configure url : '/hackathons', name : 'hackathon'

angular.module('main').factory 'Hackathon', dependencies.concat Hackathon
