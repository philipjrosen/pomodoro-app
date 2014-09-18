angular.module('pomodoroApp')
.controller('ActivitiesController', ['$scope', 'activitiesFactory',

  function($scope, activitiesFactory) {
    $scope.activities = [];

    activitiesFactory.getActivities()
      .success(function(activities) {
        $scope.activities = activities;
        activities.forEach(function(activity) {
          console.log(activity.name);
        });
      });
}]);
