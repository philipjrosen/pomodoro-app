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

    factory.put = function(activity) {
      return $http.put('/activities/' + activity._id, activity);
    };

    return factory;
  }]);
