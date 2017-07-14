dependencies = ['$document']

onBodyClick = ($document) ->
  link: ($scope, $el, attrs) ->

    callback = (e) ->

      unless $el[0].contains e.target
        $scope.$apply attrs.onBodyClick

    document.addEventListener 'click', callback

    $scope.$on '$destroy', ->
      document.removeEventListener 'click', callback

angular.module('shared').directive 'onBodyClick', dependencies.concat onBodyClick
