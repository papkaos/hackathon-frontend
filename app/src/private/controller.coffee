dependencies = []

PrivateController = () ->

  vm = this

  return vm

angular.module('private').controller 'PrivateController', dependencies.concat PrivateController
