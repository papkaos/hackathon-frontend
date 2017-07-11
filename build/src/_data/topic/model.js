(function() {
  var Topic, dependencies,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  dependencies = ['AppModel'];

  Topic = function(AppModel) {
    return Topic = (function(superClass) {
      extend(Topic, superClass);

      function Topic() {
        return Topic.__super__.constructor.apply(this, arguments);
      }

      Topic.configure({
        url: '/topics',
        name: 'topic'
      });

      return Topic;

    })(AppModel);
  };

  angular.module('main').factory('Topic', dependencies.concat(Topic));

}).call(this);
