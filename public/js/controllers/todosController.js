(function() {

  var TodosController = function($scope, todosFactory) {
    $scope.todos = [];

    todosFactory.getTodos()
      .success(function(todos){
        $scope.todos = todos;
        todos.forEach(function(todo) {
          console.log(todo.name);
        });
      });
  };

  TodosController.$inject = ['$scope', 'todosFactory'];

  angular.module('pomodoroApp')
    .controller('TodosController', TodosController);

}());
