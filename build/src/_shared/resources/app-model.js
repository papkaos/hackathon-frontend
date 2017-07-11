(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  angular.module('shared').factory('AppModel', [
    'RailsResource', 'defaultConfig', function(RailsResource, defaultConfig) {
      var AppModel;
      AppModel = (function(superClass) {
        extend(AppModel, superClass);

        function AppModel() {
          return AppModel.__super__.constructor.apply(this, arguments);
        }

        AppModel.configure();

        AppModel.resourceUrl = function() {
          return defaultConfig.apiPrefix + AppModel.__super__.constructor.resourceUrl.apply(this, arguments);
        };

        AppModel.prototype.getUrl = function() {
          return this.constructor.resourceUrl(this._getUrlParams());
        };

        AppModel.prototype._getUrlParams = function() {
          return _.pick(this, this.constructor.config.url.match(/[^{{]+?(?=}})/g) || 'id');
        };

        return AppModel;

      })(RailsResource);
      return AppModel;
    }
  ]);

}).call(this);
