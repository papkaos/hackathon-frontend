angular.module('shared').factory 'AppModel', [
  'RailsResource', 'defaultConfig'
  (RailsResource, defaultConfig) ->

    class AppModel extends RailsResource

      @configure()

      @resourceUrl : () ->
        defaultConfig.apiPrefix + super

      getUrl : () ->
        @constructor.resourceUrl @_getUrlParams()

      _getUrlParams : () ->
        _.pick this, @constructor.config.url.match(/[^{{]+?(?=}})/g) || 'id'

    return AppModel

]
