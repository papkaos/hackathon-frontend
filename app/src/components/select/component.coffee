hackSelect =
  templateUrl: 'src/components/select/template'
  controller: 'SelectController'
  controllerAs: 'selectCtrl'
  bindings:
    selectValue: '='
    selectOptions: '<'
    selectKeyField: '@'
    selectTextField: '@'

angular
  .module('ui-components')
  .component 'hackSelect', hackSelect
