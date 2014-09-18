angular.module('pomodoroApp')
  .factory('activitiesFactory', ['$http',
    function($http) {
      var factory = {};

    factory.getActivities = function() {
      return $http.get('/activities');
    };

    factory.post = function(activity) {
      return $http.post('/activities', activity);
    };

    return factory;
  }]);
