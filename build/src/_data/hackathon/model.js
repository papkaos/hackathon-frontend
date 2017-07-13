(function() {
  var Hackathon, dependencies,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  dependencies = ['AppModel'];

  Hackathon = function(AppModel) {
    return Hackathon = (function(superClass) {
      extend(Hackathon, superClass);

      function Hackathon() {
        return Hackathon.__super__.constructor.apply(this, arguments);
      }

      Hackathon.configure({
        url: '/hackathons',
        name: 'hackathon'
      });

      return Hackathon;

    })(AppModel);
  };

  angular.module('main').factory('Hackathon', dependencies.concat(Hackathon));

}).call(this);
