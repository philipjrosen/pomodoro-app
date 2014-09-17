(function() {

  var activitiesFactory = function($http) {
    var factory = {};

    factory.getActivities = function() {
      return $http.get('/activities');
    };

    return factory;
  };

  activitiesFactory.$inject = ['$http'];

  angular.module('pomodoroApp')
    .factory('activitiesFactory', activitiesFactory);

}());