(function() {

  var TodosController = function($scope) {
    $scope.todo = "Buy things";
  };

  TodosController.$inject = ['$scope'];

  angular.module('pomodoroApp')
    .controller('TodosController', TodosController);

}());
