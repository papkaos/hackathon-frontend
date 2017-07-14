dependencies = []

SelectController = () ->

  vm = this

  vm.isHidden = true
  vm.selectedValue
  vm.valuesList = []

  vm.toggleSelect = ->
    vm.isHidden = !vm.isHidden

  vm.closeSelect = ->
    vm.isHidden = true

  vm.onSelectValue = (selected) ->
    console.log(selected)

    vm.selectedValue = selected.text
    vm.selectValue = selected.value

    vm.toggleSelect()

  vm.$onChanges = (changes) ->
    changes.selectOptions.currentValue.forEach (elem) ->
      obj =
        value: elem[vm.selectKeyField]
        text: elem[vm.selectTextField]

      vm.valuesList.push(obj)
    obj = _.find(vm.valuesList, ['value', vm.selectValue])
    vm.selectedValue = obj and obj.text

  return vm

angular.module('ui-components').controller 'SelectController', dependencies.concat SelectController
