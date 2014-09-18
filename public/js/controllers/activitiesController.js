angular.module('pomodoroApp')
.controller('ActivitiesController', ['$scope', 'activitiesFactory',

  function($scope, activitiesFactory) {
    $scope.activities = [];

    activitiesFactory.getActivities()
      .success(function(activities) {
        $scope.activities = activities;
        //log date from server to browser console
        logger(activities);
      });
}]);

function logger(arr) {
  arr.forEach(function(item) {
    console.log(item.name);
  });
}
