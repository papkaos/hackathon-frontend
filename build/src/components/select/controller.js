(function() {
  var SelectController, dependencies;

  dependencies = [];

  SelectController = function() {
    var vm;
    vm = this;
    vm.isHidden = true;
    vm.selectedValue;
    vm.valuesList = [];
    vm.toggleSelect = function() {
      return vm.isHidden = !vm.isHidden;
    };
    vm.closeSelect = function() {
      return vm.isHidden = true;
    };
    vm.onSelectValue = function(selected) {
      console.log(selected);
      vm.selectedValue = selected.text;
      vm.selectValue = selected.value;
      return vm.toggleSelect();
    };
    vm.$onChanges = function(changes) {
      var obj;
      changes.selectOptions.currentValue.forEach(function(elem) {
        var obj;
        obj = {
          value: elem[vm.selectKeyField],
          text: elem[vm.selectTextField]
        };
        return vm.valuesList.push(obj);
      });
      obj = _.find(vm.valuesList, ['value', vm.selectValue]);
      return vm.selectedValue = obj && obj.text;
    };
    return vm;
  };

  angular.module('ui-components').controller('SelectController', dependencies.concat(SelectController));

}).call(this);
