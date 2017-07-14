(function() {
  var dependencies, onBodyClick;

  dependencies = ['$document'];

  onBodyClick = function($document) {
    return {
      link: function($scope, $el, attrs) {
        var callback;
        callback = function(e) {
          if (!$el[0].contains(e.target)) {
            return $scope.$apply(attrs.onBodyClick);
          }
        };
        document.addEventListener('click', callback);
        return $scope.$on('$destroy', function() {
          return document.removeEventListener('click', callback);
        });
      }
    };
  };

  angular.module('shared').directive('onBodyClick', dependencies.concat(onBodyClick));

}).call(this);
