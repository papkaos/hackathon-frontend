(function() {
  var Speaker, dependencies,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  dependencies = ['AppModel'];

  Speaker = function(AppModel) {
    return Speaker = (function(superClass) {
      extend(Speaker, superClass);

      function Speaker() {
        return Speaker.__super__.constructor.apply(this, arguments);
      }

      Speaker.configure({
        url: '/speakers',
        name: 'speaker'
      });

      return Speaker;

    })(AppModel);
  };

  angular.module('main').factory('Speaker', dependencies.concat(Speaker));

}).call(this);
