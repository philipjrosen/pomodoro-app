angular.module('pomodoroApp')
  .factory('activitiesFactory', ['$http',
    function($http) {
      var factory = {};

    factory.getActivities = function() {
      return $http.get('/activities');
    };

    return factory;
  }]);
