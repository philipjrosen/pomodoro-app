(function() {

  var todosFactory = function($http) {
    var factory = {};

    factory.getTodos = function() {
      return $http.get('/todos');
    };

    return factory;
  };

  todosFactory.$inject = ['$http'];

  angular.module('pomodoroApp')
    .factory('todosFactory', todosFactory);

}());