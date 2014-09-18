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

    factory.delete = function(activity) {
      return $http.delete('/activities/' + activity._id);
    };

    return factory;
  }]);
